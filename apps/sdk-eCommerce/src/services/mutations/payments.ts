import { PaymentMethodType } from "../../Entities/paymentMethod.entitie";
import { Either, throwError, throwSuccess } from "../../Errors";
import { apiEcommerce } from "../axiosInstances";
import { tokenizeType } from "../../Entities/paymentMethod.entitie";

export const paymentMethodsMutations = {
  myUserCards: async (): Promise<
    Either<paymentMethodsErrors, PaymentMethodType>
  > => {
    const get = await apiEcommerce.get(`/payments/myUserCards`);

    if (!get.data)
      return throwError("Não foi possível encontrar método de pagamento");

    return throwSuccess(get.data);
  },
  mySellerCards: async (): Promise<
    Either<paymentMethodsErrors, PaymentMethodType>
  > => {
    const get = await apiEcommerce.get(`/payments/mySellerCards`);

    if (!get.data)
      return throwError("Não foi possível encontrar método de pagamento");

    return throwSuccess(get.data);
  },
  updatePaymentMethods: async (
    id: string,
    data: Partial<PaymentMethodType>
  ): Promise<Either<paymentMethodsErrors, PaymentMethodType>> => {
    const update = await apiEcommerce.patch(`/payments/${id}`, data);

    if (!update.data)
      return throwError("Não foi possível atualizar método de pagamento");

    return throwSuccess(update.data);
  },
  deletePaymentMethods: async (
    id: string
  ): Promise<Either<paymentMethodsErrors, PaymentMethodType>> => {
    const update = await apiEcommerce.delete(`/payments/${id}`);

    if (!update.data)
      return throwError("Não foi possível atualizar método de pagamento");

    return throwSuccess(update.data);
  },

  addPaymentTokenCard: async (
    data: tokenizeType
  ): Promise<Either<paymentMethodsErrors, PaymentMethodType>> => {
    const update = await apiEcommerce.post(`/payments`, data);

    if (!update.data)
      return throwError("Não foi possível atualizar método de pagamento");

    return throwSuccess(update.data);
  },
};

export type paymentMethodsErrors =
  | "Não foi possível encontrar método de pagamento"
  | "Não foi possível atualizar método de pagamento";
/payments/;
