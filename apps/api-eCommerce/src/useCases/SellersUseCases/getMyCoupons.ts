import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";
import { CouponRepository } from "../../repositories/implementations/CouponRepository";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";

export const getMyCoupons = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const coupons = new CouponRepository();

    const findMyCoupons = await coupons.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    res.json(findMyCoupons);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
