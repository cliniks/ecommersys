import { Request, Response } from "express";
import { Cart, ProductInfo } from "../../entities";
import { ICartsRepository } from "../../repositories/Interfaces";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const decrementProduct = async (
  req: Request,
  res: Response,
  repo: ICartsRepository
) => {
  try {
    const {
      cartId,
      productId,
      amount,
    }: { cartId: string; productId: string; amount: number } = req.body;

    const user = await returnUserFromToken(req);

    const cart: Cart = await repo.getOne({
      key: "owner",
      value: user._id,
    });

    let products = cart.products;

    if (products.find((item: ProductInfo) => productId === item.productId)) {
      const indexOf = products.findIndex(
        (item) => item.productId === productId
      );
      if (+products[indexOf]?.amount === 1) {
        products.splice(indexOf, 1);
      }
      if (+products[indexOf]?.amount > 1) {
        products[indexOf].amount = +products[indexOf].amount - amount;
      }
    } else {
      return res.json("Item Removido");
    }

    await repo.update(cartId, { products: products });

    const getUpdated = await repo.getOne({ key: "_id", value: cartId });

    return res.json(getUpdated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível decrementar produto");
  }
};
