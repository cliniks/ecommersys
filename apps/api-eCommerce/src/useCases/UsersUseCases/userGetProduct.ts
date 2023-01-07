import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { Product } from "../../entities/product.entitie";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

export const userGetProduct = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("não foi fornecido um id");

    const productRepo = await new ProductsRepository();

    let product: Product = await productRepo.getOne({
      key: "_id",
      value: id,
    });
    let user = await returnUserFromToken(req);

    if (!product) throw new Error("Produto não encontrado");

    product.statistics.views !== undefined || product.statistics.views !== 0
      ? (product.statistics.views += 1)
      : (product.statistics.views = 0);

    if (!user.statistics.productsViews.includes(`${product._id}`))
      user.statistics.productsViews.push(`${product._id}`);

    repository.update(`${user._id}`, { statistics: user.statistics });
    await productRepo.update(id, { statistics: product.statistics });

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).send("você não esta logado.");
  }
};
