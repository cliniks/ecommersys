import { Cart, CartResponse } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCart } from "../../interfaces";
import { cartErrors, cartMutations } from "../../services";
import { Try } from "../../utils";

export class userCart implements IUserCart {
  async getMyCart(): Promise<Response<cartErrors, CartResponse>> {
    return await Try(cartMutations.getMyCart);
  }
  async incrementProduct(props: {
    productId: string;
    cartId: string;
    amount: number;
  }): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.incrementProduct, props);
  }
  async decrementProduct(props: {
    productId: string;
    cartId: string;
    amount: number;
  }): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.decrementProduct, props);
  }
  async removeProduct(props: {
    productId: string;
  }): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.removeProduct, props);
  }
  async insertCoupon(couponId: string): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.insertCoupon, couponId);
  }
  async removeCoupon(CouponId: string): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.getMyCart, CouponId);
  }
  async insertAddress(AddressId: string): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.insertAddress, AddressId);
  }
  async removeAddress(AddressId: string): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.removeAddress, AddressId);
  }
  async clearMyCart(): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.clearMyCart);
  }
}
