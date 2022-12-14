import { Request, Response } from "express";

import { CartsRepository } from "../../repositories/implementations/CartsRepository";
import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";

const carts = new CartsRepository();

export const cartsUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, carts),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, carts),
  Add: async (req: Request, res: Response) => await add(req, res, carts),
  Update: async (req: Request, res: Response) => await update(req, res, carts),
  Delete: async (req: Request, res: Response) => await del(req, res, carts),
};
