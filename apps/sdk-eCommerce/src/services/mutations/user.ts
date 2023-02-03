import { StoreSolicitate, User, UserInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { DocumentsType } from "../../Entities/documents.entitie";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { getAllProps, getSingleProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the user can do. */
export const userMutations = {
  /* soliciteSeller. */
  sellerSolicitation: async (
    data: StoreSolicitate
  ): Promise<Either<userErrors, StoreSolicitate>> => {
    const update = await apiEcommerce.post(`/sellerSolicitate`, data);

    if (!update.data) return throwError("Não foi possível solicitar");

    return throwSuccess(update.data);
  },
  /* Creating a new user. */
  createNewUser: async (data: FormData): Promise<Either<userErrors, User>> => {
    const update = await apiEcommerce.post(`/users`, data);

    if (!update.data) return throwError("Não foi possível criar o usuário");

    return throwSuccess(update.data);
  },

  seeProduct: async (productId: string): Promise<Either<userErrors, User>> => {
    const update = await apiEcommerce.post(`/users/seeProduct/${productId}`);

    if (!update.data) return throwError("Não foi possível criar o usuário");

    return throwSuccess(update.data);
  },
  /* Sending an email to the user with a token. */
  sendEmailToken: async (data: {
    email: string;
  }): Promise<Either<userErrors, string>> => {
    const update = await apiEcommerce.post(`/users/createEmailToken`, data);

    if (!update.data) return throwError("Não foi possível enviar o e-mail");

    return throwSuccess(update.data);
  },

  /* Confirm an email code to complete authentication. */
  confirmEmailToken: async (data: {
    email: string;
    code: number;
  }): Promise<Either<userErrors, string>> => {
    const update = await apiEcommerce.post(`/users/confirmEmailToken`, data);

    if (!update.data) return throwError("não foi possível validar o código");

    return throwSuccess(update.data);
  },

  /* Getting the user from the database. */
  getMyUser: async (): Promise<Either<userErrors, User>> => {
    const request = await apiEcommerce.get("/users/getMyUser");

    if (!request.data)
      return throwError("Não foi possível encontrar este Usuário");

    return throwSuccess(request.data);
  },

  /* Updating the user info. */
  updateUserInfo: async ({
    id,
    data,
  }: {
    id: string;
    data: Partial<UserInfo>;
  }): Promise<Either<userErrors, User>> => {
    const update = await apiEcommerce.patch(`/users/info/${id}`, data);

    if (!update.data)
      return throwError("Não foi possível atualizar este Usuário");

    return throwSuccess(update.data);
  },

  /* Updating the user image. */
  updateUserImage: async ({
    id,
    img,
  }: {
    id: string;
    img: any;
  }): Promise<Either<userErrors, User>> => {
    const formdata = new FormData();
    formdata.append("img", img);
    const update = await apiEcommerce.patch(`/users/image/${id}`, formdata);

    if (!update.data) return throwError("Não foi possível atualizar usuário");

    return throwSuccess(update.data);
  },

  getOneAddress: async (props: getSingleProps) => {
    const request = await apiEcommerce.get("/address/", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível encontrar policy desse Seller");

    return throwSuccess(request.data);
  },

  getMyAddress: async (props: getAllProps) => {
    const request = await apiEcommerce.get("/address/myUserAddress", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível encontrar produtos desse Seller");

    return throwSuccess(request.data);
  },

  addAddress: async (data: Address) => {
    const request = await apiEcommerce.post("/address/user", data);

    if (!request.data) return throwError("Não foi possível adicionar endereço");

    return throwSuccess(request.data);
  },

  updateAddress: async ({
    addressId,
    data,
  }: {
    addressId: string;
    data: Partial<Address>;
  }) => {
    const request = await apiEcommerce.post(`/address/${addressId}`, data);

    if (!request.data) return throwError("Não foi possível encontrar endereço");

    return throwSuccess(request.data);
  },
  deleteAddress: async ({ addressId }: { addressId: string }) => {
    const request = await apiEcommerce.delete(`/address/${addressId}`);

    if (!request.data) return throwError("Não foi possível deletar endereço");

    return throwSuccess(request.data);
  },

  getMyDocuments: async (props: getAllProps) => {
    const request = await apiEcommerce.get("/documents/myDocuments", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível adicionar documento");

    return throwSuccess(request.data);
  },

  getSingleDocument: async (props: getSingleProps) => {
    const request = await apiEcommerce.get("/documents", {
      params: props,
    });

    if (!request.data)
      return throwError("Não foi possível adicionar documento");

    return throwSuccess(request.data);
  },

  addDocument: async (data: Address) => {
    const request = await apiEcommerce.post("/documents", data);

    if (!request.data)
      return throwError("Não foi possível adicionar documento");

    return throwSuccess(request.data);
  },

  updateDocument: async ({
    documentId,
    data,
  }: {
    documentId: string;
    data: Partial<DocumentsType>;
  }) => {
    const request = await apiEcommerce.post(`/documents/${documentId}`, data);

    if (!request.data)
      return throwError("Não foi possível encontrar documento");

    return throwSuccess(request.data);
  },

  deleteDocument: async ({ documentId }: { documentId: string }) => {
    const request = await apiEcommerce.delete(`/documents/${documentId}`);

    if (!request.data) return throwError("Não foi possível deletar documento");

    return throwSuccess(request.data);
  },
};

export type userErrors =
  | "Não foi possível encontrar este Usuário"
  | "Não foi possível atualizar este Usuário"
  | "Não foi possível atualizar usuário"
  | "Não foi possível enviar o e-mail"
  | "não foi possível validar o código"
  | "Não foi possível criar o usuário"
  | "Não foi possível deletar documento"
  | "Não foi possível encontrar documento"
  | "Não foi possível solicitar"
  | "Não foi possível adicionar documento";
