import { Request, Response } from "express";

import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { getMyCart } from "./getMyCart";
import { incrementProduct } from "./incrementProduct";
import { decrementProduct } from "./decrementProduct";
import { CartsRepository } from "../../repositories";
import { insertCoupon } from "./insertCoupon";

const carts = CartsRepository;

export const cartsUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, carts),

  getMyCart: async (req: Request, res: Response) =>
    await getMyCart(req, res, carts),

  FindAll: async (req: Request, res: Response) => await getAll(req, res, carts),

  Add: async (req: Request, res: Response) => await add(req, res, carts),

  Update: async (req: Request, res: Response) => await update(req, res, carts),

  Delete: async (req: Request, res: Response) => await del(req, res, carts),

  increment: async (req: Request, res: Response) =>
    await incrementProduct(req, res, carts),

  decrement: async (req: Request, res: Response) =>
    await decrementProduct(req, res, carts),

  insertCoupon: async (req: Request, res: Response) =>
    await insertCoupon(req, res, carts),
};
