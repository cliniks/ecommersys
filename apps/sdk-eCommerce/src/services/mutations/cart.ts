import { Cart } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the cart can do. */
export const cartMutations = {
  getMyCart: async (): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.get(`/carts/getMyCart`);

    if (!update.data) return throwError("Não foi possível achar o carrinho");

    return throwSuccess(update.data);
  },

  incrementProduct: async (data: {
    cartId: string;
    productId: string;
    amount: number;
  }): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(
      `/carts/incrementProduct/${data.cartId}`,
      data
    );

    if (!update.data)
      return throwError("Não foi possível adicionar o item ao carrinho");

    return throwSuccess(update.data);
  },
  decrementProduct: async (data: {
    cartId: string;
    productId: string;
    amount: number;
  }): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(
      `/carts/decrementProduct/${data.cartId}`,
      data
    );

    if (!update.data)
      return throwError("Não foi possível adicionar o item ao carrinho");

    return throwSuccess(update.data);
  },

  removeProduct: async (data: {
    cartId: string;
    productId: string;
    amount: number;
  }): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(`/carts/decrementProduct`, data);

    if (!update.data)
      return throwError("não foi possível remover item do carrinho");

    return throwSuccess(update.data);
  },

  insertCoupon: async (couponId: String): Promise<Either<cartErrors, Cart>> => {
    const request = await apiEcommerce.post("/carts/insertCoupon", couponId);

    if (!request.data) return throwError("Não foi possível adicionar cupom");

    return throwSuccess(request.data);
  },

  removeCoupon: async (couponId: String): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(`/carts/removeCoupon`, {
      couponId,
    });

    if (!update.data) return throwError("Não foi possível remover cupom");

    return throwSuccess(update.data);
  },

  insertAddress: async (
    addressId: string
  ): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(`/carts/insertAddress`, {
      addressId,
    });

    if (!update.data)
      return throwError("Não foi possível atualizar o endereço");

    return throwSuccess(update.data);
  },

  removeAddress: async (
    addressId: string
  ): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(`/carts/removeAddress`, {
      addressId,
    });

    if (!update.data)
      return throwError("Não foi possível remover endereço do carrinho");

    return throwSuccess(update.data);
  },

  clearMyCart: async (): Promise<Either<cartErrors, Cart>> => {
    const update = await apiEcommerce.patch(`/carts/cleanMyCart`);

    if (!update.data)
      return throwError("Não foi possível limpar dados do carrinho");

    return throwSuccess(update.data);
  },
};

export type cartErrors =
  | "Não foi possível achar o carrinho"
  | "Não foi possível adicionar o item ao carrinho"
  | "não foi possível remover item do carrinho"
  | "Não foi possível adicionar cupom"
  | "Não foi possível remover cupom"
  | "Não foi possível atualizar o endereço"
  | "Não foi possível remover endereço do carrinho"
  | "Não foi possível limpar dados do carrinho";
