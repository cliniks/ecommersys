import { CartReturn } from "../../entities";
import { ICouponRepository } from "../../repositories/Interfaces";
export declare const cartWithCouponApplied: (cart: CartReturn, couponRepo: ICouponRepository) => Promise<CartReturn>;
