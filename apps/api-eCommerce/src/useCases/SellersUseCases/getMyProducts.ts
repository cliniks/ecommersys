import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";
import { getAllProps } from "../../repositories/Interfaces";
import { ProductsRepository } from "../../repositories";

export const getMyProducts = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;
    const user = await returnUserFromToken(req);

    const products = ProductsRepository;

    const findMyProducts = await products.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    return res.json(findMyProducts);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
