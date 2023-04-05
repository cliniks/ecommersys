import { Router } from "express";
import { returnUserFromToken } from "../utils/returnUserFromToken";
import { getMyCartFunction } from "../useCases/CartsUseCases/getMyCart";
import {
  AddressesRepository,
  ProductsRepository,
  SellersRepository,
} from "../repositories";
import UserCheckoutMEProvider from "../providers/implementations/UserCheckoutMEProvider";
import { addDot } from "../utils/monetary";

const ShippingRoutes: Router = Router();

ShippingRoutes.get("/calculate", async (req, res) => {
  try {
    const user = await returnUserFromToken(req);

    const myCart = await getMyCartFunction(user);

    const userAddress = await AddressesRepository.getOne({
      key: "_id",
      value: user.userInfo.defaultAddress,
    });

    let Orders: ordersType[] = [];
    let productsData: orderProductType[] = [];

    for (const cartProduct of myCart.products) {
      const productExists = productsData.find(
        (item) => item.id === cartProduct.productId
      );

      if (productExists) continue;

      productsData = [];

      const getProduct = await ProductsRepository.getOne({
        key: "_id",
        value: cartProduct._id,
      });

      const formatProduct: orderProductType = {
        id: getProduct._id.toString(),
        insurance_value: addDot(cartProduct.totalValue),
        quantity: cartProduct.amount,
        height: +getProduct.shippingInfo.height,
        weight: +getProduct.shippingInfo.weight,
        width: +getProduct.shippingInfo.width,
        length: +getProduct.shippingInfo.length,
      };

      productsData.push(formatProduct);

      const getSeller = await SellersRepository.getOne({
        key: "_id",
        value: cartProduct.owner,
      });

      let orderToUp: ordersType = {
        storeId: getSeller._id.toString(),
        storeName: getSeller.name,
        from: {
          postal_code: getSeller.storeInfo.zipCode.replaceAll("-", ""),
        },
        to: { postal_code: userAddress.zipCode.replaceAll("-", "") },
        products: productsData,
      };

      const orderExists = Orders.find(
        (item) => item.storeId === orderToUp.storeId
      );

      if (orderExists) {
        const index = Orders.findIndex(
          (item) => item.storeId === orderToUp.storeId
        );
        Orders[index].products.push(formatProduct);
        continue;
      }

      Orders.push(orderToUp);
    }

    let OrdersCalculated: any[] = [];

    // for (let orderI = 0;i<Orders.length;) {
    for (const order of Orders) {
      const calculate = await UserCheckoutMEProvider.calculateShipping(order);
      let preparedObject = {
        shippingOptions: calculate,
        storeId: order.storeId,
        storeName: order.storeName,
      };
      OrdersCalculated.push(preparedObject);
    }

    res.json(OrdersCalculated);
  } catch (err) {
    console.log(err.toString());
    res.status(400).send(err.toString());
  }
});

export { ShippingRoutes };

type ordersType = { storeId: string; storeName: string } & {
  from: {
    postal_code: string;
  };
  to: {
    postal_code: string;
  };
  products: orderProductType[];
};

type orderProductType = {
  id: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  insurance_value: number;
  quantity: number;
};

export type shippingType = {
  id: number;
  name: string;
  price: string;
  custom_price: string;
  discount: string;
  currency: string;
  delivery_time: number;
  delivery_range: {
    min: number;
    max: number;
  };
  custom_delivery_time: number;
  custom_delivery_range: {
    min: number;
    max: number;
  };
  packages: {
    format: string;
    dimensions: {
      height: number;
      width: number;
      length: number;
    };
    weight: string;
    insurance_value: string;
    products: {
      id: string;
      quantity: number;
    }[];
  }[];
  additional_services: {
    receipt: boolean;
    own_hand: boolean;
    collect: boolean;
  };
  company: {
    id: number;
    name: string;
    picture: string;
  };
};
