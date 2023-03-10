import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import {
  ProductsRepository,
  SalesRepository,
  SellersRepository,
} from "../../repositories";
import { getTotalSells } from "./dashboardStats/getTotalSells";
import { getTotalGains } from "./dashboardStats/getTotalGains";
import { getCanceledSales } from "./dashboardStats/getCanceledSales";
import { addDot } from "../../utils/monetary";
import { getMyClients } from "../ClientUseCases/getMyClients";
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";

const productsRepo = ProductsRepository;
const salesRepo = SalesRepository;
const sellerRepo = SellersRepository;

export const dashboardStats = async (
  req: Request,
  res: Response
  // repo: ISellersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    const mySales = await salesRepo.getAll({
      filter: {
        fields: "createdAt totalValue paymentStatus totalItems",
        key: "storeIds",
        value: `${user.storeId}`,
      },
      page: 0,
      size: 200,
    });

    console.log(
      mySales.result.map((item) =>
        new Date(item.createdAt).toLocaleDateString()
      )
    );

    const myProducts = await productsRepo.getAll({
      filter: {
        fields: "createdAt stockInfo",
        key: "owner",
        value: `${user.storeId}`,
      },
      page: 0,
      size: 200,
    });

    const myClients = await getMyClients(user);

    console.log({
      mySales: mySales.result.length,
      myProducts: myProducts.result.length,
      myClients: myClients.length,
    });

    // retornar vendas totais
    const totalSells = await getTotalSells();

    // retornar ganhos e lucros
    const totalGains = mySales.result.filter(
      (item) =>
        item.paymentStatus === "CONFIRMED" || item.paymentStatus === "RECEIVED"
    );

    // const totalGains = await getTotalGains();

    // retornar compras canceladas
    // const cancelSales = await getCanceledSales();
    const canceledSales = mySales.result.filter(
      (item) =>
        item.paymentStatus === "REFUNDED" ||
        item.paymentStatus === "REFUND_REQUESTED"
    );
    // retornar pedidos em aberto
    const pedidosAbertos = mySales.result.filter(
      (item) => item.paymentStatus === "PENDING" || !item.paymentStatus
    );
    // retornar pedidos em processamento
    // retornar produtos aguardando cumprimento
    // retornar produtos com baixo estoque
    const lowStockProducts = myProducts.result.filter(
      (item) => item.stockInfo.qnt < 20
    );
    // retornar produtos fora de estoque
    const outOfStockProducts = myProducts.result.filter(
      (item) => item.stockInfo.qnt <= 0
    );

    // retornar satisfação do cliente
    // retornar items mais comprados
    // retornar info de localidade da compra do item
    return res.json({
      totalSells: mySales.result.map((item) => +item.totalValue.toFixed(2)),
      gainsAndProfits: totalGains.map((item) => +item.totalValue.toFixed(2)),
      canceledOrders: canceledSales.map((item) => item.totalItems),
      openOrders: pedidosAbertos.map((item, index) => item.totalItems),
      inProcessingOrders: pedidosAbertos.length,
      productsAwaitingFulfillment: pedidosAbertos.length,
      lowStockProducts: lowStockProducts.length,
      outOfStockProducts: outOfStockProducts.length,
      clientSatisfaction: [0, 0, 0],
      mostBuyed: [
        // { product: "botox", percentage: 40, qnt: 40 },
        // { product: "seringa", percentage: 20, qnt: 20 },
        // { product: "agulha", percentage: 17, qnt: 17 },
      ],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
