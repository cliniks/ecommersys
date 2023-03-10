import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { createProduct } from "./createProduct";
import { ProductsRepository } from "../../repositories";
import { favoriteProduct } from "./favoriteProduct";
import { likeProduct } from "./likeProduct";
import { getSingleProduct } from "./getProduct";
import { getMany } from "../CrudUseCases/getMany";

const products = ProductsRepository;

export const productsUseCases = {
  FineOne: async (req: Request, res: Response) =>
    await getSingleProduct(req, res, products),
  FindMany: async (req: Request, res: Response) =>
    await getMany(req, res, products),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, products),
  CreateProduct: async (req: Request, res: Response) =>
    await createProduct(req, res, products),
  Update: async (req: Request, res: Response) =>
    await update(req, res, products),
  Delete: async (req: Request, res: Response) => await del(req, res, products),
  favoriteProduct: async (req: Request, res: Response) =>
    await favoriteProduct(req, res, products),
  likeProduct: async (req: Request, res: Response) =>
    await likeProduct(req, res, products),
};
