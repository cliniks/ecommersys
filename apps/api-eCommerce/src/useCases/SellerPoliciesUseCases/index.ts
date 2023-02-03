import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";
import { get } from "../CrudUseCases/get";
import { update } from "../CrudUseCases/update";
import { createPolicy } from "./createPolicy";
import { StorePoliciesRepository } from "../../repositories/implementations/StorePoliciesRepo";
import { getMyPolicies } from "./getMyPolicies";

const policy = new StorePoliciesRepository();

export const sellerPoliciesUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, policy),
  FindAll: async (req: Request, res: Response) => await getMyPolicies(req, res),
  Add: async (req: Request, res: Response) =>
    await createPolicy(req, res, policy),
  Update: async (req: Request, res: Response) => await update(req, res, policy),
  Delete: async (req: Request, res: Response) => await del(req, res, policy),
};
