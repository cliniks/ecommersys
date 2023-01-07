import { Request, Response } from "express";

import { SellersRepository } from "../../repositories/implementations/SellersRepository";

import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { getMyCoupons } from "./coupon";
import { dashboardStats } from "./dashboardStats";
import {
  addCard,
  deleteCard,
  getCard,
  getCards,
  paymentsPageInfo,
  updateCard,
} from "./payments";
import { getMyStore } from "./getMyStore";
import { getMyProducts } from "./getMyProducts";
import { getMyCategories } from "./getMyCategories";
import { updateStoreImage } from "./updateStoreImage";
import { updateStoreBanner } from "./updateStoreBanner";

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
  getMyCoupons: async (req: Request, res: Response) =>
    await getMyCoupons(req, res),
  getMyStore: async (req: Request, res: Response) =>
    await getMyStore(req, res, sellersRepo),
  getMyProducts: async (req: Request, res: Response) =>
    await getMyProducts(req, res),
  getMyCategories: async (req: Request, res: Response) =>
    await getMyCategories(req, res),
  updateStoreImage: async (req: Request, res: Response) =>
    await updateStoreImage(req, res, sellersRepo),
  updateStoreBanner: async (req: Request, res: Response) =>
    await updateStoreBanner(req, res, sellersRepo),
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
