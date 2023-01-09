import { Store } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { getAllProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the user can do. */
export const sellerMutations = {
  /* Creating a new user. */
  solicitation: async (
    data: FormData
  ): Promise<Either<sellerErrors, Store>> => {
    const update = await apiEcommerce.post(`/sellers`, data);

    if (!update.data) return throwError("Não foi possível criar o usuário");

    return throwSuccess(update.data);
  },

  /* Sending an email to the user with a token. */
  sendEmailToken: async (data: {
    email: string;
  }): Promise<Either<sellerErrors, string>> => {
    const update = await apiEcommerce.post(`/sellers/createEmailToken`, data);

    if (!update.data) return throwError("Não foi possível enviar o e-mail");

    return throwSuccess(update.data);
  },

  /* Confirm an email code to complete authentication. */
  confirmEmailToken: async (data: {
    email: string;
    code: number;
  }): Promise<Either<sellerErrors, string>> => {
    const update = await apiEcommerce.post(`/sellers/confirmEmailToken`, data);

    if (!update.data) return throwError("não foi possível validar o código");

    return throwSuccess(update.data);
  },

  /* Getting the seller from the database. */
  getMyStore: async (): Promise<Either<sellerErrors, Store>> => {
    const request = await apiEcommerce.get("/sellers/getMyStore");

    if (!request.data)
      return throwError("Não foi possível encontrar este Usuário");

    return throwSuccess(request.data);
  },

  /* Getting the user from the database. */
  getOneStore: async (
    key: string,
    value: string
  ): Promise<Either<sellerErrors, Store>> => {
    const request = await apiEcommerce.get(`/sellers`, {
      params: { key, value },
    });

    if (!request.data)
      return throwError("Não foi possível encontrar este Usuário");

    return throwSuccess(request.data);
  },

  /* Getting the user from the database. */
  getAllStore: async (
    props: getAllProps
  ): Promise<Either<sellerErrors, Store>> => {
    const request = await apiEcommerce.get(`/sellers`, { params: props });

    if (!request.data)
      return throwError("Não foi possível encontrar este Usuário");

    return throwSuccess(request.data);
  },

  /* Updating the user info. */
  updateSellerInfo: async (
    id: string,
    data: Partial<Store>
  ): Promise<Either<sellerErrors, Store>> => {
    const update = await apiEcommerce.patch(`/sellers/info/${id}`, data);

    if (!update.data)
      return throwError("Não foi possível atualizar este Usuário");

    return throwSuccess(update.data);
  },

  /* Updating the user image. */
  updateStoreImage: async (
    formData: FormData
  ): Promise<Either<sellerErrors, Store>> => {
    const update = await apiEcommerce.patch(
      `/sellers/updateStoreImage`,
      formData
    );

    if (!update.data) return throwError("Não foi possível atualizar usuário");

    return throwSuccess(update.data);
  },

  /* Updating the user image. */
  updateStoreBanner: async (
    formData: FormData
  ): Promise<Either<sellerErrors, Store>> => {
    const update = await apiEcommerce.patch(
      `/sellers/updateStoreBanner`,
      formData
    );

    if (!update.data) return throwError("Não foi possível atualizar usuário");

    return throwSuccess(update.data);
  },

  getMyProducts: async (props: getAllProps) => {
    const request = await apiEcommerce.get("/sellers/getMyProducts", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível encontrar produtos desse Seller");

    return throwSuccess(request.data);
  },

  getMyCategories: async (props: getAllProps) => {
    const request = await apiEcommerce.get("/sellers/getMyCategories", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível encontrar produtos desse Seller");

    return throwSuccess(request.data);
  },

  getMyCoupons: async (props: getAllProps) => {
    const request = await apiEcommerce.get("/sellers/getMyCoupons", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível encontrar produtos desse Seller");

    return throwSuccess(request.data);
  },
};

export type sellerErrors =
  | "Não foi possível encontrar este Usuário"
  | "Não foi possível atualizar este Usuário"
  | "Não foi possível atualizar usuário"
  | "Não foi possível enviar o e-mail"
  | "não foi possível validar o código"
  | "Não foi possível criar o usuário"
  | "Não foi possível encontrar produtos desse Seller";
