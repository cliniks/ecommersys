import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { ISellersRepository } from "../../repositories/Interfaces";

export const getMyStore = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    const findMyStore = await repo.getOne({
      key: "_id",
      value: user.storeId,
    });

    return res.json(findMyStore);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
