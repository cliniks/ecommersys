import { Request, Response } from "express";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";
import { del } from "../CrudUseCases/delete";
import { OrdersRepository } from "../../repositories";

const repo = OrdersRepository;

export const ordersUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, repo),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, repo),
  Update: async (req: Request, res: Response) => await update(req, res, repo),
  Delete: async (req: Request, res: Response) => await del(req, res, repo),
};
