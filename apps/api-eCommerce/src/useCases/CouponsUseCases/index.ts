import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { createCoupon } from "./createCoupons";

import { CouponsRepository } from "../../repositories";

const coupon = CouponsRepository;

export const couponsUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, coupon),

  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, coupon),

  Add: async (req: Request, res: Response) =>
    await createCoupon(req, res, coupon),

  Update: async (req: Request, res: Response) => await update(req, res, coupon),

  Delete: async (req: Request, res: Response) => await del(req, res, coupon),
};
