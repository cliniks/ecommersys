import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";
import { CategoriesRepository } from "../../repositories";
import { getAllProps } from "../../repositories/Interfaces";

export const getMyCategories = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const categories = CategoriesRepository;

    const findMyCategories = await categories.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    return res.json(findMyCategories);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
