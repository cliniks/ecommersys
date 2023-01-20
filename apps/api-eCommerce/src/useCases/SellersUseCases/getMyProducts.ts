import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";

export const getMyProducts = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;
    const user = await returnUserFromToken(req);

    const products = new ProductsRepository();

    const findMyProducts = await products.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    res.json(findMyProducts);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
