import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import {
  AddressesRepository,
  CartsRepository,
  CouponsRepository,
  ProductsRepository,
  SellersRepository,
} from "../../repositories";
import { Coupon, Product, Sales, Store, billingType } from "../../entities";
import { ClientAsaasImplementation } from "../../providers/implementations/ClientAsaasImplementation";
import { applyCommission } from "../CommissionUseCases/validateComission";
import { verifyCouponApply } from "../CouponsUseCases/verifyCouponApply";
import { addDot } from "../../utils/monetary";

const cartRepo = CartsRepository;
const addressRepo = AddressesRepository;
const productRepo = ProductsRepository;
const storeRepo = SellersRepository;
const couponRepo = CouponsRepository;

const gatewayPag = new ClientAsaasImplementation();

export const createPayment = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const { billingType }: { billingType: billingType } = req.body;

    console.log("gerando Payment");

    const user = await returnUserFromToken(req);

    const userCart = await cartRepo.getOne({ key: "owner", value: user._id });

    const userAddress = await addressRepo.getOne({
      key: "_id",
      value: user.userInfo.defaultAddress,
    });

    const cartProducts = userCart.products || [];

    const cartCoupons = userCart.coupons || [];

    let stores: StoreMapped[] = [];

    let coupons: Coupon[] = [];

    // Fetch All Coupons
    if (cartCoupons.length > 0) {
      for (let c = 0; c < cartCoupons.length; c++) {
        if (cartCoupons[c]) {
          const couponId = cartCoupons[c]?.split("/")[0] || "";
          const getCoupon = await couponRepo.getOne({
            key: "_id",
            value: couponId,
          });
          coupons.push(getCoupon);
        }
      }
    }

    for (let i = 0; i < cartProducts.length; i++) {
      const { productId, amount } = cartProducts[i];

      const getProduct: Product = await productRepo.getOne({
        key: "_id",
        value: productId,
      });

      const getSeller: Store = await storeRepo.getOne({
        key: "_id",
        value: getProduct.owner,
      });

      const discount =
        cartCoupons.length > 0
          ? verifyCouponApply(coupons, getSeller, getProduct, amount)
          : {
              couponApplied: "",
              discount: 0,
              discountApplied: 0,
              totalValue: addDot(getProduct.price),
            };

      console.log({ discount });

      const productData = {
        imgs: getProduct.imgs,
        name: getProduct.name,
        owner: getProduct.owner,
        price: getProduct.price,
        regularPrice: getProduct.regularPrice,
        shippingInfo: getProduct.shippingInfo,
        stockInfo: getProduct.stockInfo,
        _id: getProduct._id,
        virtualProduct: getProduct.virtualProduct,
        categories: getProduct?.categories,
      };

      const preparePrice = addDot(+getProduct.price * +amount);

      console.log({ preparePrice });

      const prepareProduct: ProductMapped = {
        product: productData,
        amount,
        value: +preparePrice,
        discountValue: +discount?.discount || 0,
        couponApplied: discount?.couponApplied || "0",
        totalValue: +discount?.totalValue || 0,
      };

      const storePrepare: StoreMapped = {
        storeId: getSeller._id,
        walletId: getSeller.asaasWalletId,
        coupons: cartCoupons,
        products: [prepareProduct],
        totalDiscount: +discount?.discount || 0,
        totalPrice: +discount?.totalValue || 0,
      };

      if (
        stores.length > 0 &&
        stores.find((item) => item.storeId === storePrepare.storeId)
      ) {
        const indexOfStore = stores.findIndex(
          (item) => item.storeId === storePrepare.storeId
        );
        stores[indexOfStore].products.push(...storePrepare.products);
        stores[indexOfStore].totalDiscount =
          +stores[indexOfStore].totalDiscount + +storePrepare.totalDiscount;
        stores[indexOfStore].totalPrice =
          +stores[indexOfStore].totalPrice + +storePrepare.totalPrice;

        continue;
      }
      stores.push(storePrepare);
    }

    const reducedValued = {
      totalValue: stores.reduce((a, b) => a + +b.totalPrice, 0).toString(),
      totalDiscount: stores
        .reduce((a, b) => a + +b.totalDiscount, 0)
        .toString(),
      totalItems: stores.reduce((a, b) => a + b.products.length, 0).toString(),
    };

    let storeValues: string[] = [];

    for (let s = 0; s < stores.length; s++) {
      if (!storeValues.includes(stores[s].storeId))
        storeValues.push(stores[s].storeId);
    }

    const saleResponse: Sales = {
      userId: user._id,
      addressId: userAddress._id,
      sellers: stores,
      coupons: cartCoupons,
      totalValue: +reducedValued.totalValue,
      totalDiscount: +reducedValued.totalDiscount,
      totalItems: +reducedValued.totalItems,
      billingType,
      storeIds: storeValues,
    };

    console.log({ saleResponse });

    const insertOnRepo = await repo.addOne(saleResponse);
    // const insertOnRepo = { _id: "teste" };

    let splitPrepare = [];
    for (let r = 0; r < saleResponse.sellers.length; r++) {
      splitPrepare.push({
        walletId: saleResponse.sellers[r].walletId,
        fixedValue: await applyCommission(saleResponse.sellers[r].totalPrice),
      });
    }

    const prepareToGenCharge = {
      customer: user.gatewayPagId,
      billingType: billingType,
      dueDate: new Date().toISOString().split("T")[0],
      value: saleResponse.totalValue,
      description: `Pedido ${insertOnRepo._id}`,
      externalReference: insertOnRepo._id,
      split: splitPrepare,
    };

    console.log(prepareToGenCharge);

    const generatePayment = await gatewayPag.genCharge(prepareToGenCharge);

    console.log(generatePayment);

    if (!generatePayment) {
      throw new Error("não foi possível concluir o pedido, contate o suporte");
    }

    const getQRCodePix = generatePayment
      ? await gatewayPag.genPixCode({
          id: generatePayment.id,
        })
      : null;

    await repo.update(insertOnRepo._id, { paymentId: generatePayment.id });

    res.json({ generatePayment, getQRCodePix });
  } catch (err) {
    console.log(err.toString());
    res.status(400).send(false);
  }
};

type StoreMapped = {
  storeId: string;
  products: ProductMapped[];
  totalPrice: number;
  walletId: string;
  totalDiscount: number;
  coupons: string[];
};

type ProductMapped = {
  product: Partial<Product>;
  amount: number;
  value: number;
  couponApplied: string;
  discountValue: number;
  totalValue: number;
};
