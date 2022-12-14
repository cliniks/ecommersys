import { Request, Response } from "express";

import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { createProduct } from "./createProduct";

const products = new ProductsRepository();

export const productsUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, products),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, products),
  CreateProduct: async (req: Request, res: Response) =>
    await createProduct(req, res, products),
  Update: async (req: Request, res: Response) =>
    await update(req, res, products),
  Delete: async (req: Request, res: Response) => await del(req, res, products),
};
