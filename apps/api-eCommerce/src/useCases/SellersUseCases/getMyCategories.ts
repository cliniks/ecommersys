import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";

export const getMyCategories = async (req: Request, res: Response) => {
  try {
    let { page, size, filter }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const categories = new CategoryRepository();

    filter = { key: "owner", value: user.storeId, fields: "" };

    const findMyCategories = await categories.getAll({ page, size, filter });

    res.json(findMyCategories);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
