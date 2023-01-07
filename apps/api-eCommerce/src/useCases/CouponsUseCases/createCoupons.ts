import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const createCoupon = async (
  req: Request,
  res: Response,
  repository: any
) => {
  try {
    const user = await returnUserFromToken(req);
    let newCoupon = req.body;
    newCoupon.owner = user.storeId;
    return res.json(await repository.addOne(newCoupon));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar coupon");
  }
};
