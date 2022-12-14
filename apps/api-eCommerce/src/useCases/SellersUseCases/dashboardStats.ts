import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";

export const dashboardStats = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // retornar vendas totais
    // retornar ganhos e lucros
    // retornar compras canceladas
    // retornar pedidos em aberto
    // retornar pedidos em processamento
    // retornar produtos aguardando cumprimento
    // retornar produtos com baixo estoque
    // retornar produtos fora de estoque
    // retornar satisfação do cliente
    // retornar items mais comprados
    // retornar info de localidade da compra do item
    res.json({
      totalSells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      gainsAndProfits: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      canceledOrders: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      openOrders: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      inProcessingOrders: 0,
      productsAwaitingFulfillment: 0,
      lowStockProducts: 0,
      outOfStockProducts: 0,
      clientSatisfaction: [0, 0, 0],
      mostBuyed: [
        { product: "botox", percentage: 40, qnt: 40 },
        { product: "seringa", percentage: 20, qnt: 20 },
        { product: "agulha", percentage: 17, qnt: 17 },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
