import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { ICategoryRepository } from "../../repositories/Interfaces";

export const createCategory = async (
  req: Request,
  res: Response,
  repository: ICategoryRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    if (user.access !== 99) throw new Error("Usuário não é administrador");

    let newCategory = req.body;

    newCategory.owner = user._id;

    newCategory.isGlobal = true;

    return res.json(await repository.addOne(newCategory));
  } catch (err) {
    console.log(err);

    return res.json("não foi possível criar categoria");
  }
};
