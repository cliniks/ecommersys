import { Request, Response } from "express";
import { ICheckoutRepository } from "../../repositories/Interfaces";

export const createCheckout = (
  req: Request,
  res: Response,
  repo: ICheckoutRepository
) => {
  try {
    res.json(true);
  } catch (err) {
    res.json(false);
  }
};
