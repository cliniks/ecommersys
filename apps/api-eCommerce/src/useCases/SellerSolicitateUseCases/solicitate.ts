import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces/IStoreSolicitate";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const solicitate = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  try {
    const { name, storeInfo } = req.body;
    const getUser = await returnUserFromToken(req);
    const add = await repo.addOne({ name, storeInfo, owner: getUser._id });
    res.json(add);
  } catch (err) {
    res.status(400).send("não foi possível solicitar.");
  }
};
