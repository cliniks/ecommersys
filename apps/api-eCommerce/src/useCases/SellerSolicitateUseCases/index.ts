import { Request, Response } from "express";

import { solicitate } from "../SellerSolicitateUseCases/solicitate";

import { confirm } from "./confirm";

import { findOne } from "./findOne";

import { findAll } from "./findAll";

import { reject } from "./reject";

import { StoreSolicitationRepository } from "../../repositories";
import { del } from "../CrudUseCases/delete";

const SolicitateRepo = StoreSolicitationRepository;

export const sellersSolicitateUseCases = {
  FineOne: async (req: Request, res: Response) =>
    await findOne(req, res, SolicitateRepo),
  FindAll: async (req: Request, res: Response) =>
    await findAll(req, res, SolicitateRepo),
  Solicitate: async (req: Request, res: Response) =>
    await solicitate(req, res, SolicitateRepo),
  Confirm: async (req: Request, res: Response) =>
    await confirm(req, res, SolicitateRepo),
  Reject: async (req: Request, res: Response) =>
    await reject(req, res, SolicitateRepo),
  delete: async (req: Request, res: Response) =>
    await del(req, res, SolicitateRepo),
};
