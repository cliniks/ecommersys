import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";

export const createCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // criar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const deleteCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // deletar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const updateCoupon = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    // atualizar coupon
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
