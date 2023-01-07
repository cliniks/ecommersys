import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";

export const getMyProducts = async (req: Request, res: Response) => {
  try {
    let { page, size, filter }: getAllProps = req.query;
    const user = await returnUserFromToken(req);

    const products = new ProductsRepository();

    filter = { key: "owner", value: user.storeId, fields: "" };

    const findMyProducts = await products.getAll({ page, size, filter });

    res.json(findMyProducts);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
