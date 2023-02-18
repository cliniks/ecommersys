import { Request, Response } from "express";
import {
  CategoryCommissionImplementation,
  GlobalCommissionImplementation,
  ProductCommissionImplementation,
  StoreCommissionImplementation,
} from "../../repositories/implementations/AdminImplementation";
import {
  categoryCommissionsModel,
  globalCommissionModel,
  productCommissionsModel,
  storeCommissionsModel,
} from "../../repositories/models";
import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";

const models = {
  globalModel: globalCommissionModel,
  productsModel: productCommissionsModel,
  storeModel: storeCommissionsModel,
  categoryModel: categoryCommissionsModel,
};

const globalCommissionRepo = new GlobalCommissionImplementation(
  models.globalModel
);

const productsCommissionRepo = new ProductCommissionImplementation(
  models.productsModel
);

const categoryCommissionRepo = new CategoryCommissionImplementation(
  models.categoryModel
);

const storeCommissionRepo = new StoreCommissionImplementation(
  models.storeModel
);

const globalCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, globalCommissionRepo),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, globalCommissionRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, globalCommissionRepo),
  Update: async (req: Request, res: Response) =>
    await update(req, res, globalCommissionRepo),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, globalCommissionRepo),
};

const productsCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, productsCommissionRepo),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, productsCommissionRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, productsCommissionRepo),
  Update: async (req: Request, res: Response) =>
    await update(req, res, productsCommissionRepo),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, productsCommissionRepo),
};

const categoryCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, categoryCommissionRepo),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, categoryCommissionRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, categoryCommissionRepo),
  Update: async (req: Request, res: Response) =>
    await update(req, res, categoryCommissionRepo),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, categoryCommissionRepo),
};

const storeCommission = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, storeCommissionRepo),
  addOne: async (req: Request, res: Response) =>
    await add(req, res, storeCommissionRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, storeCommissionRepo),
  Update: async (req: Request, res: Response) =>
    await update(req, res, storeCommissionRepo),
  Delete: async (req: Request, res: Response) =>
    await del(req, res, storeCommissionRepo),
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
