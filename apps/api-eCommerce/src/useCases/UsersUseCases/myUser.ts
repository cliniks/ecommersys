import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const myUser = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    let userData: any = {};

    userDataValues.forEach((item: string) => (userData[item] = user[item]));

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).send("você não esta logado.");
  }
};

const userDataValues = [
  "username",
  "waller",
  "img",
  "userInfo",
  "myOrders",
  "myBuys",
  "wishList",
  "favorites",
  "likes",
  "messages",
  "cart",
  "storeId",
  "storeData",
  "access",
];
