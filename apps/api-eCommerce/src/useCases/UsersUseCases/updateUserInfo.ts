import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { IUsersRepository } from "../../repositories/Interfaces";

export const updateUserInfo = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    return res.json(await repository.updateUserInfo(user, req.body));
  } catch (err) {
    console.log(err);

    return res.status(400).send("não foi possível atualziar");
  }
};
