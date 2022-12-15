import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const myUser = async (req: Request, res: Response) => {
  try {
    const user = await returnUserFromToken(req);

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("você não esta logado.");
  }
};
