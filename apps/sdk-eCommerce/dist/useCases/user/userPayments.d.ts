import { PaymentMethodType, tokenizeType } from "../../Entities/paymentMethod.entitie";
import { Response } from "../../Errors";
import { IUserPayment, getAllReturn } from "../../interfaces";
import { paymentMethodsErrors } from "../../services";
export declare class userPayments implements IUserPayment {
    myUserCards(): Promise<Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>>;
    mySellerCards(): Promise<Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>>;
    addPaymentMethod(data: tokenizeType): Promise<Response<paymentMethodsErrors, PaymentMethodType>>;
    deletePaymentMethod(id: string): Promise<Response<paymentMethodsErrors, string>>;
}
