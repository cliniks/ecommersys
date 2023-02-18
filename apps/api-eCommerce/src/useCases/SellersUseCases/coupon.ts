import { Request, Response } from "express";
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
import { getMyCouponsFunc } from "./getMyCoupons";
import { CouponsRepository } from "../../repositories";

const coupons = CouponsRepository;

export const getMyCoupons = async (req: Request, res: Response) =>
  getMyCouponsFunc(req, res);

export const createCoupon = async (req: Request, res: Response) => {
  try {
    const create = await coupons.addOne(req.body);
    return res.json(create);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const deleteCoupon = async (req: Request, res: Response) => {
  try {
    const { couponId } = req.body;
    const remove = await coupons.delete(couponId);
    return res.json(remove);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const updateCoupon = async (req: Request, res: Response) => {
  try {
    const { couponId, data } = req.body;
    const update = await coupons.update(couponId, data);
    return res.json(update);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
