import {
  PaymentMethodType,
  tokenizeType,
} from "../../Entities/paymentMethod.entitie";
import { Response } from "../../Errors";
import { IUserPayment, getAllReturn } from "../../interfaces";
import { paymentMethodsErrors, paymentMethodsMutations } from "../../services";

import { Try } from "../../utils";

export class userPayments implements IUserPayment {
  async myUserCards(): Promise<
    Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>
  > {
    return await Try(paymentMethodsMutations.myUserCards);
  }
  async mySellerCards(): Promise<
    Response<paymentMethodsErrors, getAllReturn<PaymentMethodType>>
  > {
    return await Try(paymentMethodsMutations.mySellerCards);
  }
  async addPaymentMethod(
    data: tokenizeType
  ): Promise<Response<paymentMethodsErrors, PaymentMethodType>> {
    return await Try(paymentMethodsMutations.addPaymentTokenCard, data);
  }
  async deletePaymentMethod(
    id: string
  ): Promise<Response<paymentMethodsErrors, string>> {
    return await Try(paymentMethodsMutations.deletePaymentMethods, id);
  }
}
