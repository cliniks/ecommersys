import { Request, Response } from "express";
import { SellersRepository, UsersRepository } from "../repositories";
import { IWebSocket } from "../providers/websobket/IWebSocket";

const userRepo = UsersRepository;
const sellerRepo = SellersRepository;

export const verifyCpfExistence = async (
  req: Request,
  res: Response,
  socket: IWebSocket
) => {
  try {
    const { cpf } = req.query;

    const verifyUser = await userRepo.getOne({
      key: "userInfo.cpf",
      value: cpf,
    });
    if (!verifyUser) return res.json(false);

    return res.json(true);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.toString());
  }
};

export const verifyCnpjExistence = async (
  req: Request,
  res: Response,
  socket: IWebSocket
) => {
  try {
    const { cnpj } = req.query;

    const verifyUser = await userRepo.getOne({
      key: "userInfo.cnpj",
      value: cnpj,
    });

    const verifySeller = await sellerRepo.getOne({
      key: "storeInfo.cnpj",
      value: cnpj,
    });

    if (!verifyUser || !verifySeller) return res.json(false);

    return res.json(true);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.toString());
  }
};
