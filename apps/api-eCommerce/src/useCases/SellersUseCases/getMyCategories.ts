import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";

export const getMyCategories = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const categories = new CategoryRepository();

    const findMyCategories = await categories.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    res.json(findMyCategories);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
