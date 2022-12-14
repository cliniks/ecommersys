import { Request, Response } from "express";

import { StoreSolicitateRepository } from "../../repositories/implementations/StoreSolicitateRepo";

import { get } from "../CrudUseCases/get";
import { getAll } from "../CrudUseCases/getAll";
import { solicitate } from "../SellerSolicitateUseCases/solicitate";
import { confirm } from "./confirm";

const SolicitateRepo = new StoreSolicitateRepository();

export const sellersSolicitateUseCases = {
  FineOne: async (req: Request, res: Response) =>
    await get(req, res, SolicitateRepo),
  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, SolicitateRepo),
  Solicitate: async (req: Request, res: Response) =>
    await solicitate(req, res, SolicitateRepo),
  Confirm: async (req: Request, res: Response) =>
    await confirm(req, res, SolicitateRepo),
};
