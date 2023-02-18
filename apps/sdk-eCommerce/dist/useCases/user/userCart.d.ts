import { Cart, CartResponse } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCart } from "../../interfaces";
import { cartErrors } from "../../services";
export declare class userCart implements IUserCart {
    getMyCart(): Promise<Response<cartErrors, CartResponse>>;
    incrementProduct(props: {
        productId: string;
        cartId: string;
        amount: number;
    }): Promise<Response<cartErrors, Cart>>;
    decrementProduct(props: {
        productId: string;
        cartId: string;
        amount: number;
    }): Promise<Response<cartErrors, Cart>>;
    removeProduct(props: {
        productId: string;
    }): Promise<Response<cartErrors, Cart>>;
    insertCoupon(couponId: string): Promise<Response<cartErrors, Cart>>;
    removeCoupon(CouponId: string): Promise<Response<cartErrors, Cart>>;
    insertAddress(AddressId: string): Promise<Response<cartErrors, Cart>>;
    removeAddress(AddressId: string): Promise<Response<cartErrors, Cart>>;
    clearMyCart(): Promise<Response<cartErrors, Cart>>;
}
