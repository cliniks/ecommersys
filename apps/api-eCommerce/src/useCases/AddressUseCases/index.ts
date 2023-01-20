import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { update } from "../CrudUseCases/update";
import { add } from "../CrudUseCases/add";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";

const address = new AddressRepository();

export const addressUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, address),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, address),
  Add: async (req: Request, res: Response) => add(req, res, address),
  Update: async (req: Request, res: Response) =>
    await update(req, res, address),
  Delete: async (req: Request, res: Response) => await del(req, res, address),
};
