import { Router } from "express";
import { IWebSocket } from "../providers/websobket/IWebSocket";
import { verifyCnpjExistence, verifyCpfExistence } from "../controllers";
import UserCheckoutMEProvider from "../providers/implementations/UserCheckoutMEProvider";
import { returnUserFromToken } from "../utils/returnUserFromToken";
import { getMyCartFunction } from "../useCases/CartsUseCases/getMyCart";
import {
  AddressesRepository,
  ProductsRepository,
  SellersRepository,
} from "../repositories";
import { addDot } from "../utils/monetary";
// import { verifyers } from "../middlewares/verifyers";

const TestsRoutes = (socket: IWebSocket): Router => {
  const testsRoutes: Router = Router();

  testsRoutes.get(
    "/verifyCpf",
    async (req, res) => await verifyCpfExistence(req, res, socket)
  );
  testsRoutes.get(
    "/verifyCnpj",
    async (req, res) => await verifyCnpjExistence(req, res, socket)
  );
  
  testsRoutes.get("/calculateShipping", async (req, res) => {
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

      for (const order of Orders) {
        const calculate = await UserCheckoutMEProvider.calculateShipping(order);
        OrdersCalculated.push(calculate);
      }

      res.json(OrdersCalculated);
    } catch (err) {
      console.log(err.toString());
      res.status(400).send(err.toString());
    }
  });

  return testsRoutes;
};

export { TestsRoutes };

type ordersType = { storeId: string } & {
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
