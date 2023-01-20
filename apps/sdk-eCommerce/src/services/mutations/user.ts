import { User, UserInfo } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the user can do. */
export const userMutations = {
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
};

export type userErrors =
  | "Não foi possível encontrar este Usuário"
  | "Não foi possível atualizar este Usuário"
  | "Não foi possível atualizar usuário"
  | "Não foi possível enviar o e-mail"
  | "não foi possível validar o código"
  | "Não foi possível criar o usuário";
