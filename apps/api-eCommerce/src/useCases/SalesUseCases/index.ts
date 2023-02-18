import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { SalesRepository } from "../../repositories";

import { createPayment } from "./createPayment";

const sales = SalesRepository;

export const salesUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, sales),
  FindAll: async (req: Request, res: Response) => await getAll(req, res, sales),
  Add: async (req: Request, res: Response) =>
    await createPayment(req, res, sales),
  Update: async (req: Request, res: Response) => await update(req, res, sales),
  Delete: async (req: Request, res: Response) => await del(req, res, sales),
};
