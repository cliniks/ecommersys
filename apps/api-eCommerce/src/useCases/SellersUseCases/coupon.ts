import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { CouponRepository } from "../../repositories/implementations/CouponRepository";

export const getMyCoupons = async (req: Request, res: Response) => {
  try {
    const repo = new CouponRepository();
    const user = await returnUserFromToken(req);

    const findMyCoupons = await repo.getAll({
      filter: {
        key: "owner",
        value: user.storeId,
      },
    });

    res.json(findMyCoupons);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const createCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // criar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const deleteCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // deletar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const updateCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // atualizar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
