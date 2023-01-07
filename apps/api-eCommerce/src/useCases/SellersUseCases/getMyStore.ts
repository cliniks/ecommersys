import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

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

    res.json(findMyStore);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
