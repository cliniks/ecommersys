import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { Cart, CartReturn, ProductsReturn } from "../../entities";
import { ICartsRepository } from "../../repositories/Interfaces";
import { User } from "../../entities";
import { getCartProducts } from "./getCartProducts";

export const getMyCart = async (
  req: Request,
  res: Response,
  repo: ICartsRepository
) => {
  try {
    const user: User = await returnUserFromToken(req);

    let findMyCart: any = await repo.getOne({
      key: "owner",
      value: `${user._id}`,
    });

    if (!findMyCart) {
      const create: any = await repo.addOne({ owner: `${user._id}` } as Cart);
      findMyCart = create;
    }

    let cart: Partial<CartReturn> = findMyCart._doc;

    let productItems: any = cart?.products || [];

    let couponItems: any = cart?.coupons || [];

    const getMYCartProducts: ProductsReturn[] = await getCartProducts(
      productItems,
      couponItems
    );

    let totalValues = { totalPrice: 0, totalDiscount: 0 };

    for (let product of getMYCartProducts) {
      totalValues.totalPrice = +totalValues.totalPrice + +product.totalValue;
      totalValues.totalDiscount =
        +totalValues.totalDiscount + +product.discountValue || 0;
    }

    const cartReturn: Partial<CartReturn> = {
      ...cart,
      products: getMYCartProducts,
      ...totalValues,
    };

    return res.json(cartReturn);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
