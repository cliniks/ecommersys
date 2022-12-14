import { Request, Response } from "express";

import { SalesRepository } from "../../repositories/implementations/SalesRepository";

import { add } from "../CrudUseCases/add";
import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";

const sales = new SalesRepository();

export const salesUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, sales),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, sales),
  Add: async (req: Request, res: Response) => await add(req, res, sales),
  Update: async (req: Request, res: Response) => await update(req, res, sales),
  Delete: async (req: Request, res: Response) => await del(req, res, sales),
};
