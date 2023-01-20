import { Checkout } from "../../Entities";
import { Response } from "../../Errors";
import { IUserCheckout, getSingleProps } from "../../interfaces";
import { checkoutErrors } from "../../services";
export declare class userCheckout implements IUserCheckout {
    getSingle(props: getSingleProps): Promise<Response<checkoutErrors, Checkout>>;
    generate(orderId: string): Promise<Response<checkoutErrors, Checkout>>;
    createPayment(data: {
        type: string;
        value: string;
        checkoutId: string;
    }): Promise<Response<checkoutErrors, Checkout>>;
    updatePayment(data: {
        type: string;
        value: string;
        checkoutId: string;
    }): Promise<Response<checkoutErrors, Checkout>>;
    confirmPayment(checkoutId: string): Promise<Response<checkoutErrors, Checkout>>;
    cancelOpen(checkoutId: string): Promise<Response<checkoutErrors, Checkout>>;
}
