import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { SalesRepository } from "../../repositories";

// import { createPayment } from "./createPayment";

import { createPayment2 } from "./genPayment/createPaymentUseCase";
import { getMyUserBuys } from "./getMyUserBuys";
import { getMySellerBuys } from "./getMySellerBuys";
import { verifyPaymentStatus } from "./verifyPaymentMethods";
import { getSingleOrder } from "./getSingleOrder";
import { getAllSales } from "./getAllSales";
import { UpdateDocument } from "./genPayment/updateDocument";

const sales = SalesRepository;

export const salesUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, sales),

  FindAll: async (req: Request, res: Response) =>
    await getAllSales(req, res, sales),

  getMyUserBuys: async (req: Request, res: Response) =>
    await getMyUserBuys(req, res, sales),

  getSingleOrder: async (req: Request, res: Response) =>
    await getSingleOrder(req, res, sales),

  getMySellerBuys: async (req: Request, res: Response) =>
    await getMySellerBuys(req, res, sales),

  Add: async (req: Request, res: Response) =>
    await createPayment2(req, res, sales),

  Update: async (req: Request, res: Response) => await update(req, res, sales),

  Delete: async (req: Request, res: Response) => await del(req, res, sales),

  verifyPaymentStatus: async (req: Request, res: Response) =>
    await verifyPaymentStatus(req, res, sales),

  cancelOrder: async (req: Request, res: Response) =>
    await verifyPaymentStatus(req, res, sales),

  insertOrderDocument: async (req: Request, res: Response) =>
    await verifyPaymentStatus(req, res, sales),

  updateDocument: async (req: Request, res: Response) =>
    UpdateDocument(req, res, sales),
};
