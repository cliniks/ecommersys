import { Request, Response } from "express";
import { ISalesRepository } from "../../../repositories/Interfaces";
import { returnUserFromToken } from "../../../utils/returnUserFromToken";
import {
  AddressesRepository,
  CartsRepository,
  CouponsRepository,
  OrdersRepository,
  ProductsRepository,
  SellersRepository,
} from "../../../repositories";
import {
  Coupon,
  Product,
  ProductsReturn,
  SaleDocuments,
  Sales,
  billingType,
} from "../../../entities";
import { ClientAsaasImplementation } from "../../../providers/implementations/ClientAsaasImplementation";

import { getCartProducts } from "../../CartsUseCases/getCartProducts";
import { UpdateProductStock } from "../../ProductsUseCases/updateStockInfo";
import { applyCommission } from "../../CommissionUseCases/validateComission";
import { addDot, removeDot } from "../../../utils/monetary";
import { createRoom } from "../../ChatsUseCases/createRoom";
import { OrderType } from "../../../entities/order.entitie";
import { shippingType } from "../../../router/shippingRoutes";
// import { makeApi } from "../../../services/axiosInstance";

const addressRepo = AddressesRepository;
const productRepo = ProductsRepository;
const couponRepo = CouponsRepository;
const storeRepo = SellersRepository;
const cartRepo = CartsRepository;

const gatewayPag = new ClientAsaasImplementation();

export const createPayment2 = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const {
      billingType,
      cardToken,
      installmentCount,
      documents = [],
      shipping = [],
    }: {
      billingType: billingType;
      cardToken: string;
      installmentCount: number;
      documents: SaleDocuments[];
      shipping: ShippingOptions[];
    } = req.body;

    const user = await returnUserFromToken(req);

    const userCart = await cartRepo.getOne({ key: "owner", value: user._id });

    const userAddress = await addressRepo.getOne({
      key: "_id",
      value: user.userInfo.defaultAddress,
    });

    const cartProducts =
      (await getCartProducts(userCart.products, userCart.coupons)) || [];

    if (cartProducts.length === 0)
      return res
        .status(400)
        .send("Não possui produtos no carrinho para continuar");

    const cartCoupons = userCart.coupons || [];

    let stores: StoreMapped[] = [];

    // let coupons: Coupon[] = [];

    for (let product of cartProducts) {
      const includesAlready = stores.find(
        (item: any) => item.storeId === product.owner
      );

      const hasStock = product.stockInfo.qnt;

      if (hasStock - product.amount <= 0)
        return res.status(400).send(`Produto ${product.name} sem estoque`);

      if (!includesAlready && hasStock > 0) {
        const getStore = await storeRepo.getOne({
          key: "_id",
          value: product.owner,
        });

        createRoom(getStore.owner.toString(), user._id.toString());

        const filterStoreProducts = cartProducts.filter(
          (item) => item.owner === product.owner
        );

        stores.push({
          coupons: filterStoreProducts.map((item) => item.couponApplied),
          products: filterStoreProducts,
          storeId: product.owner,
          totalDiscount: filterStoreProducts.reduce(
            (a, b) => a + +b.discountValue,
            0
          ),
          totalPrice: filterStoreProducts.reduce(
            (a, b) => a + +b.totalValue,
            0
          ),
          walletId: getStore.asaasWalletId,
        });
      }

      await UpdateProductStock(product, product.amount);
    }

    const reducedValued = {
      totalValue: removeDot(stores.reduce((a, b) => a + +b.totalPrice, 0)),
      totalDiscount: removeDot(
        stores.reduce((a, b) => a + +b.totalDiscount, 0)
      ),
      totalItems: stores.reduce((a, b) => a + b.products.length, 0).toString(),
    };

    const storeIds: string[] = [...new Set(stores.map((item) => item.storeId))];

    let splitPrepare: {
      walletId: string;
      fixedValue?: number;
      totalValue?: number;
    }[] = [];

    let orders: any[] = [];

    for (let r = 0; r < stores.length; r++) {
      const thisShippingSelected = shipping.find(
        (item) => item.storeId.toString() === stores[r].storeId.toString()
      );

      orders.push({
        coupons: stores[r].coupons,
        meLogs: [],
        products: stores[r].products,
        shipping: {
          configs: {
            additional_services:
              thisShippingSelected?.shipping.additional_services,
            company: thisShippingSelected?.shipping.company,
            currency: thisShippingSelected?.shipping.currency,
            name: thisShippingSelected?.shipping.name,
          },
          estimated: {
            custom_delivery_range:
              thisShippingSelected?.shipping.custom_delivery_range,
            custom_delivery_time:
              thisShippingSelected?.shipping.custom_delivery_time,
            custom_price: thisShippingSelected?.shipping.custom_price,
            delivery_range: thisShippingSelected?.shipping.delivery_range,
            delivery_time: thisShippingSelected?.shipping.delivery_time,
          },
          packages: thisShippingSelected?.shipping.packages,
        },
        shippingStatus: "",
        storeId: thisShippingSelected?.storeId,
        storeName: thisShippingSelected?.storeName,
        totalDiscount: stores[r]?.totalDiscount.toString(),
        totalValue: stores[r]?.totalPrice.toString(),
        userId: user._id?.toString(),
        userName: user?.userInfo.name,
      });

      const totalprice = +stores[r].totalPrice;

      const comissionApplied = +(await applyCommission(
        addDot(stores[r].totalPrice)
      ));

      const commissionValue = Math.abs(addDot(totalprice) - comissionApplied);

      const calculateCommissionPercentage =
        (comissionApplied * 100) / addDot(totalprice);

      console.log(
        "applyCommission",
        comissionApplied.toFixed(2),
        "storeTotalPrice",
        addDot(totalprice).toFixed(2),
        "comissionValue",
        commissionValue.toFixed(2),
        "comissionTotalPercentage",
        calculateCommissionPercentage.toFixed(2)
      );

      if (splitPrepare.find((item) => item.walletId === stores[r].walletId)) {
        const indexSplit = splitPrepare.findIndex(
          (item) => item.walletId === stores[r].walletId
        );
        if (
          billingType === "CREDIT_CARD" &&
          installmentCount &&
          installmentCount > 0
        ) {
          splitPrepare[indexSplit].totalValue += await applyCommission(
            addDot(stores[r].totalPrice)
          );
          splitPrepare[indexSplit].fixedValue +=
            addDot(stores[r].totalPrice) / installmentCount;
          continue;
        }
        if (
          billingType === "CREDIT_CARD" &&
          installmentCount &&
          installmentCount > 0
        ) {
          splitPrepare[indexSplit].totalValue += await applyCommission(
            addDot(stores[r].totalPrice)
          );
          splitPrepare[indexSplit].fixedValue +=
            addDot(stores[r].totalPrice) / installmentCount;

          continue;
        }
        splitPrepare[indexSplit].fixedValue += await applyCommission(
          addDot(stores[r].totalPrice)
        );
        continue;
      }

      if (
        billingType === "CREDIT_CARD" &&
        installmentCount &&
        installmentCount > 0
      ) {
        splitPrepare.push({
          walletId: stores[r].walletId,
          totalValue: comissionApplied,
          fixedValue: comissionApplied / installmentCount,
        });
        continue;
      }
      splitPrepare.push({
        walletId: stores[r].walletId,
        fixedValue: comissionApplied,
      });
    }

    let saleResponse: Sales = {
      userId: user._id,
      addressId: userAddress._id,
      sellers: stores,
      coupons: cartCoupons,
      totalValue: +reducedValued.totalValue,
      totalDiscount: +reducedValued.totalDiscount || 0,
      totalItems: +reducedValued.totalItems,
      billingType,
      storeIds,
      documents: documents,
    };

    if (installmentCount && installmentCount > 0)
      saleResponse.installmentCount = installmentCount;

    const insertOnRepo = await repo.addOne(saleResponse);

    let prepareToGenCharge: {
      customer: string;
      billingType: billingType;
      dueDate: string;
      value: number;
      description: string;
      externalReference: string;
      split: Object;
      creditCardToken?: string;
      installmentCount?: number;
      totalValue?: number;
    } = {
      customer: user.gatewayPagId,
      billingType: billingType,
      dueDate: new Date().toISOString().split("T")[0],
      value: addDot(+reducedValued.totalValue),
      description: `Pedido ${insertOnRepo._id}`,
      externalReference: insertOnRepo._id,
      split: splitPrepare,
    };

    if (billingType === "CREDIT_CARD")
      prepareToGenCharge["creditCardToken"] = cardToken;

    if (installmentCount) {
      prepareToGenCharge["installmentCount"] = installmentCount;
      prepareToGenCharge["totalValue"] = addDot(+reducedValued.totalValue);
    }

    const generatePayment = await gatewayPag.genCharge(prepareToGenCharge);

    console.log("generatePayment", generatePayment);

    const getQRCodePix =
      billingType === "PIX" && generatePayment
        ? await gatewayPag.genPixCode({
            id: generatePayment.id,
          })
        : null;

    const getBoleto =
      billingType === "BOLETO" && generatePayment
        ? await gatewayPag.genBoleto({
            id: generatePayment.id,
          })
        : null;

    await cartRepo.update(userCart._id, { products: [], coupons: [] });

    orders.map((item) => {
      OrdersRepository.addOne(item);
    });

    return res.json({
      insertOnRepo,
      generatePayment,
      getQRCodePix,
      getBoleto,
      orders,
    });

    // return res.json(orders);
  } catch (err) {
    console.log(err.toString());
    return res.status(400).send(false);
  }
};

type StoreMapped = {
  storeId: string;
  products: ProductsReturn[];
  totalPrice: number;
  walletId: string;
  totalDiscount: number;
  coupons: string[];
};

export type ProductMapped = {
  product: Partial<Product>;
  productId: string;
  amount: number;
  couponApplied: string;
  discountValue: number;
  totalValue: number;
};

export type ShippingOptions = {
  storeId: string;
  storeName: string;
  shipping: shippingType;
};
