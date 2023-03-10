import { Request, Response } from "express";
import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { AdminCommissionRepository } from "../../repositories";
import {
  storeCategoriesCommission,
  storeProductsCommission,
} from "./storeCommissions";

const adminCommissions = AdminCommissionRepository;

const globalCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, adminCommissions.globalCommission),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, adminCommissions.globalCommission),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, adminCommissions.globalCommission),
  Update: async (req: Request, res: Response) =>
    await update(req, res, adminCommissions.globalCommission),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, adminCommissions.globalCommission),
};

const productsCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, adminCommissions.productsCommission),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, adminCommissions.productsCommission),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, adminCommissions.productsCommission),
  Update: async (req: Request, res: Response) =>
    await update(req, res, adminCommissions.productsCommission),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, adminCommissions.productsCommission),
  storeProductCommission: async (req: Request, res: Response) =>
    storeProductsCommission(req, res),
};

const categoryCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, adminCommissions.categoryCommission),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, adminCommissions.categoryCommission),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, adminCommissions.categoryCommission),
  Update: async (req: Request, res: Response) =>
    await update(req, res, adminCommissions.categoryCommission),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, adminCommissions.categoryCommission),
  storeCategoryCommission: async (req: Request, res: Response) =>
    storeCategoriesCommission(req, res),
};

const storeCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, adminCommissions.storeCommission),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, adminCommissions.storeCommission),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, adminCommissions.storeCommission),
  Update: async (req: Request, res: Response) =>
    await update(req, res, adminCommissions.storeCommission),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, adminCommissions.storeCommission),
};

export const commission = {
  Global: globalCommission,
  Product: productsCommission,
  Category: categoryCommission,
  Store: storeCommission,
};

export type commissionType = {
  Global: typeof globalCommission;
  Product: typeof productsCommission;
  Category: typeof categoryCommission;
  Store: typeof storeCommission;
};
