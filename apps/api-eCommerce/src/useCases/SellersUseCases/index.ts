import { Request, Response } from "express";

import { SellersRepository } from "../../repositories/implementations/SellersRepository";

import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { createCoupon, deleteCoupon, updateCoupon } from "./coupon";
import { dashboardStats } from "./dashboardStats";
import {
  addCard,
  deleteCard,
  getCard,
  getCards,
  paymentsPageInfo,
  updateCard,
} from "./payments";

const sellersRepo = new SellersRepository();

export const sellersUseCases = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, sellersRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, sellersRepo),
  Add: async (req: Request, res: Response) => await add(req, res, sellersRepo),
  Update: async (req: Request, res: Response) =>
    await update(req, res, sellersRepo),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, sellersRepo),
  DashboardStats: async (req: Request, res: Response) =>
    await dashboardStats(req, res, sellersRepo),
  CreateCoupon: async (req: Request, res: Response) =>
    await createCoupon(req, res, sellersRepo),
  DeleteCoupon: async (req: Request, res: Response) =>
    await deleteCoupon(req, res, sellersRepo),
  UpdateCoupon: async (req: Request, res: Response) =>
    await updateCoupon(req, res, sellersRepo),
  GetCards: async (req: Request, res: Response) =>
    await getCards(req, res, sellersRepo),
  GetCard: async (req: Request, res: Response) =>
    await getCard(req, res, sellersRepo),
  AddCard: async (req: Request, res: Response) =>
    await addCard(req, res, sellersRepo),
  UpdateCard: async (req: Request, res: Response) =>
    await updateCard(req, res, sellersRepo),
  DeleteCard: async (req: Request, res: Response) =>
    await deleteCard(req, res, sellersRepo),
  GetPaymentsPageInfo: async (req: Request, res: Response) =>
    await paymentsPageInfo(req, res, sellersRepo),
};
