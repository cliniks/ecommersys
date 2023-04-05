import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { UsersRepository } from "../../repositories";

export const myUser = async (req: Request, res: Response) => {
  try {
    const user = await returnUserFromToken(req);
    const updateLastLogin = await UsersRepository.update(user._id, {
      lastLogin: new Date(),
    });
    return res.json(updateLastLogin);
  } catch (err) {
    console.log(err);
    return res.status(400).send("você não esta logado.");
  }
};
