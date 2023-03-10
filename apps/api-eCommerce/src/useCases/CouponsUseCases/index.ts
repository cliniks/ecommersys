import { Request, Response } from "express";

import { del } from "../CrudUseCases/delete";

import { get } from "../CrudUseCases/get";

import { getAll } from "../CrudUseCases/getAll";

import { update } from "../CrudUseCases/update";

import { createCoupon } from "./createCoupons";

import { CouponsRepository } from "../../repositories";
import { CrudUseCases } from "../CrudUseCases";
import { Coupon } from "../../entities";
import { getMany } from "../CrudUseCases/getMany";

const coupon = CouponsRepository;

export const couponsUseCases = {
  FineOne: async (req: Request, res: Response) => await get(req, res, coupon),

  FindAll: async (req: Request, res: Response) =>
    await getAll(req, res, coupon),

  findMany: async (req: Request, res: Response) =>
    await getMany(req, res, coupon),

  Add: async (req: Request, res: Response) =>
    await createCoupon(req, res, coupon),

  Update: async (req: Request, res: Response) => await update(req, res, coupon),

  Delete: async (req: Request, res: Response) => await del(req, res, coupon),
};

class CouponUseCases extends CrudUseCases<Coupon> {
  constructor() {
    super(coupon);
  }
}
export default new CouponUseCases();
