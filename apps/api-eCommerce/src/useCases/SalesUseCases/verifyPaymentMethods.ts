import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";

export const verifyPaymentStatus = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    return res.json("ok");
  } catch (err) {
    return res.status(400).send(err.toString());
  }
};
