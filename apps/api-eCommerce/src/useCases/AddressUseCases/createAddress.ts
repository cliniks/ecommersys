import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const createUserAddress = async (
  req: Request,
  res: Response,
  repository: any
) => {
  try {
    const user = await returnUserFromToken(req);
    let newAddress = req.body;
    newAddress.owner = user._id;
    return res.json(await repository.addOne(newAddress));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar coupon");
  }
};

export const createStoreAddress = async (
  req: Request,
  res: Response,
  repository: any
) => {
  try {
    const user = await returnUserFromToken(req);
    let newAddress = req.body;
    newAddress.owner = user.storeId;
    return res.json(await repository.addOne(newAddress));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar coupon");
  }
};
