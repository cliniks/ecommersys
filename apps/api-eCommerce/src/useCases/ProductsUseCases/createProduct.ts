import { Request, Response } from "express";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { Product } from "../../entities/product.entitie";

export const createProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { body } = req;

    let product: Product = { ...body };

    const user = await returnUserFromToken(req);

    product.owner = user.storeId;

    const resolveProductAdd = await repo.addOne(product);

    res.json(resolveProductAdd);
  } catch (err) {
    console.log("createProduct", err);
    res.status(400).send("não foi possível criar.");
  }
};
