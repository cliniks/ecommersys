import { Request, Response } from "express";
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { CouponRepository } from "../../repositories/implementations/CouponRepository";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";

const coupons = new CouponRepository();

export const getMyCoupons = async (req: Request, res: Response) => {
  try {
    let { page, size, filter }: getAllProps = req.query;
    const user = await returnUserFromToken(req);

    filter = {
      key: `owner ${filter?.key}`,
      value: `${user.storeId}  ${filter?.value}`,
      fields: "",
    };

    const findMyCoupons = await coupons.getAll({ page, size, filter });

    res.json(findMyCoupons);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const createCoupon = async (req: Request, res: Response) => {
  try {
    const create = await coupons.addOne(req.body);
    res.json(create);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const deleteCoupon = async (req: Request, res: Response) => {
  try {
    const { couponId } = req.body;
    const remove = await coupons.delete(couponId);
    res.json(remove);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const updateCoupon = async (req: Request, res: Response) => {
  try {
    const { couponId, data } = req.body;
    const update = await coupons.update(couponId, data);
    return update;
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
