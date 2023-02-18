import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";
import { CouponsRepository } from "../../repositories";
import { getAllProps } from "../../repositories/Interfaces";

export const getMyCouponsFunc = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    console.log(req.query);

    const user = await returnUserFromToken(req);

    const coupons = CouponsRepository;

    const findMyCoupons = await coupons.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    return res.json(findMyCoupons);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
