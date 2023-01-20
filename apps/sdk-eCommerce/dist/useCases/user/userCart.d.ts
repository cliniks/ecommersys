import { Cart } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCart } from "../../interfaces";
import { cartErrors } from "../../services";
export declare class userCart implements IUserCart {
    getMyCart(): Promise<Response<cartErrors, Cart>>;
    insertProduct(props: {
        productId: string;
        amount: string;
    }): Promise<Response<cartErrors, Cart>>;
    removeProduct(props: {
        productId: string;
        amount: string;
    }): Promise<Response<cartErrors, Cart>>;
    insertCoupon(CouponId: string): Promise<Response<cartErrors, Cart>>;
    removeCoupon(CouponId: string): Promise<Response<cartErrors, Cart>>;
    insertAddress(AddressId: string): Promise<Response<cartErrors, Cart>>;
    removeAddress(AddressId: string): Promise<Response<cartErrors, Cart>>;
    clearMyCart(): Promise<Response<cartErrors, Cart>>;
}
