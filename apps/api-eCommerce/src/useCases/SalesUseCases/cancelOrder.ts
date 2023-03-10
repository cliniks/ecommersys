import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";

export const cancelOrder = (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    res.json(true);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
