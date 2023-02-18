import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";
import { Product } from "../../entities";

export const createProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { body } = req;

    let product: Product = { ...body };

    if (!product.price) product.price = "0";
    if (!product.regularPrice) product.regularPrice = "0";

    const user = await returnUserFromToken(req);

    product.owner = user.storeId;

    const resolveProductAdd = await repo.addOne(product);

    return res.json(resolveProductAdd);
  } catch (err) {
    console.log("createProduct", err);
    return res.status(400).send("não foi possível criar.");
  }
};
