import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const createCategory = async (
  req: Request,
  res: Response,
  repository: any
) => {
  try {
    const user = await returnUserFromToken(req);
    let newCategory = req.body;
    newCategory.owner = user.storeId;
    return res.json(await repository.addOne(newCategory));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível criar categoria");
  }
};
