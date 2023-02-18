import { Request, Response } from "express";

import { Cart, ProductsReturn, Product } from "../../entities";

import { ProductsRepository } from "../../repositories";

import { ICartsRepository } from "../../repositories/Interfaces";

const productRepo = ProductsRepository;

export const incrementProduct = async (
  req: Request,
  res: Response,
  repo: ICartsRepository
) => {
  try {
    const { cartId, productId, amount } = req.body;

    const cart: Cart = await repo.getOne({ key: "_id", value: cartId });
    const getProduct: Product = await productRepo.getOne({
      key: "_id",
      value: productId,
    });

    const productToAdd = { productId, amount };

    let products: any = cart.products;

    if (products.find((item: ProductsReturn) => productId === item.productId)) {
      console.log("tem o item");
      const indexOf = products.findIndex(
        (item: ProductsReturn) => item.productId === productId
      );

      if (products[indexOf].amount < getProduct.stockInfo.qnt)
        products[indexOf].amount = +products[indexOf].amount + amount;
    } else {
      console.log("não tem o item");
      products.push(productToAdd);
    }

    await repo.update(cartId, { products: products });

    const getUpdated = await repo.getOne({ key: "_id", value: cartId });

    return res.json(getUpdated);
  } catch (err) {
    return res.status(400).send("não foi possível incrementar produto");
  }
};
