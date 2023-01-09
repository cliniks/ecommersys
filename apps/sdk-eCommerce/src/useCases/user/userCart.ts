import { Cart } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCart, getAllProps } from "../../interfaces";
import { cartErrors, cartMutations } from "../../services";
import { Try } from "../../utils";

export class userCart implements IUserCart {
  async getMyCart(props: getAllProps): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.getMyCart, props);
  }
  async insertProduct({
    productId,
    amount,
  }: {
    productId: string;
    amount: string;
  }): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.insertProduct, { productId, amount });
  }
  async removeProduct({
    productId,
    amount,
  }: {
    productId: string;
    amount: string;
  }): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.removeProduct, { productId, amount });
  }
  async insertCoupon(CouponId: string): Promise<Response<cartErrors, Cart>> {
    return await Try(cartMutations.insertCoupon, CouponId);
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
