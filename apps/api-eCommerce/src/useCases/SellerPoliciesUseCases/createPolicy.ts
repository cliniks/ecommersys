import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const createPolicy = async (
  req: Request,
  res: Response,
  repository: any
) => {
  try {
    const user = await returnUserFromToken(req);
    let newPolicy = req.body;
    newPolicy.owner = user.storeId;
    return res.json(await repository.addOne(newPolicy));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar coupon");
  }
};
