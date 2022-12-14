import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const updateUserInfo = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const user = await returnUserFromToken(req, repository);
    res.json(await repository.updateUserInfo(user, req.body));
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível atualziar");
  }
};
