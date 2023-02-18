import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { Cart, CartReturn } from "../../entities";
import { ICartsRepository } from "../../repositories/Interfaces";
import { CouponsRepository, ProductsRepository } from "../../repositories";
import { User } from "../../entities";
import { cartWithCouponApplied } from "./applyCoupon";

const couponRepo = CouponsRepository;

export const getMyCart = async (
  req: Request,
  res: Response,
  repo: ICartsRepository
) => {
  try {
    const user: User = await returnUserFromToken(req);

    const products = ProductsRepository;

    let findMyCart: any = await repo.getOne({
      key: "owner",
      value: `${user._id}`,
    });

    if (!findMyCart) {
      const create: any = await repo.addOne({ owner: `${user._id}` } as Cart);
      findMyCart = create;
    }

    let cart: Partial<CartReturn> = findMyCart._doc;

    // const applyCoupon = verifyIfCanBeAplied(cart);

    let totalPrice = 0;

    let productItems: any = Array.from(cart?.products);

    if (productItems?.length > 0) {
      for (let i = 0; i < productItems.length; i++) {
        const getProduct: any = await products.getOne({
          key: "_id",
          value: `${productItems[i].productId}`,
        });

        productItems[i] = { ...productItems[i], ...getProduct._doc };
        cart = { ...cart, products: productItems };
      }
      for (let prodIndex = 0; prodIndex < productItems.length; prodIndex++) {
        const value =
          +productItems[prodIndex].price * +productItems[prodIndex].amount;

        totalPrice = totalPrice + value;
      }

      cart.totalPrice = totalPrice;
    }

    const verifyAppliedCoupons = await cartWithCouponApplied(
      cart as CartReturn,
      couponRepo
    );

    return res.json(verifyAppliedCoupons);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
