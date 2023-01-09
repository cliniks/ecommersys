import { Cart, Checkout } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the checkout can do. */
export const checkoutMutations = {
  getSingle: async (
    key: string,
    value: string
  ): Promise<Either<checkoutErrors, Checkout>> => {
    const response = await apiEcommerce.get(`/checkouts/`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o checkout");

    return throwSuccess(response.data);
  },

  generate: async (orderId: string): Promise<Either<checkoutErrors, Cart>> => {
    const response = await apiEcommerce.post(`/checkouts/generate`, {
      orderId,
    });

    if (!response.data)
      return throwError("Não foi possível gerar um novo checkout");

    return throwSuccess(response.data);
  },

  createPayment: async ({
    type,
    value,
    checkoutId,
  }: {
    type: string;
    value: number;
    checkoutId: string;
  }): Promise<Either<checkoutErrors, Cart>> => {
    const response = await apiEcommerce.patch(
      `/checkouts/createPayment/${checkoutId}`,
      { type, value }
    );

    if (!response.data) return throwError("Não foi possível criar pagamento");

    return throwSuccess(response.data);
  },

  updatePayment: async ({
    type,
    value,
    checkoutId,
  }: {
    type: string;
    value: number;
    checkoutId: string;
  }): Promise<Either<checkoutErrors, Cart>> => {
    const response = await apiEcommerce.patch(
      `/checkouts/updatePayment/${checkoutId}`,
      { type, value }
    );

    if (!response.data)
      return throwError("Não foi possível atualizar pagamento");

    return throwSuccess(response.data);
  },

  confirmPayment: async (
    checkoutId: String
  ): Promise<Either<checkoutErrors, Cart>> => {
    const request = await apiEcommerce.get(
      `/checkouts/confirmPayment/${checkoutId}`
    );

    if (!request.data)
      return throwError("Não foi possível confirmar pagamento");

    return throwSuccess(request.data);
  },

  cancelOpen: async (
    checkoutId: String
  ): Promise<Either<checkoutErrors, Cart>> => {
    const response = await apiEcommerce.patch(
      `/checkouts/cancel/${checkoutId}`
    );

    if (!response.data) return throwError("Não foi possível cancelar checkout");

    return throwSuccess(response.data);
  },
};

export type checkoutErrors =
  | "Não foi possível achar o checkout"
  | "Não foi possível gerar um novo checkout"
  | "Não foi possível criar pagamento"
  | "Não foi possível atualizar pagamento"
  | "Não foi possível confirmar pagamento"
  | "Não foi possível cancelar checkout";
