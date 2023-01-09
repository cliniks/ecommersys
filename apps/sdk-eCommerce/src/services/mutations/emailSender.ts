import { Either, throwError, throwSuccess } from "../../Errors";
import { apiEcommerce } from "../axiosInstances";

export const emailSenderMutations = {
  /* Sending an email to the user with a token. */
  sendEmailToken: async (data: {
    email: string;
  }): Promise<Either<EmailSenderErrors, any>> => {
    const update = await apiEcommerce.post(`/users/createEmailToken`, data);

    if (!update.data) return throwError("Não foi possível enviar o e-mail");

    return throwSuccess(update.data);
  },

  /* Confirm an email code to complete authentication. */
  confirmEmailToken: async (data: {
    email: string;
    code: number;
  }): Promise<Either<EmailSenderErrors, any>> => {
    const update = await apiEcommerce.post(`/users/confirmEmailToken`, data);

    if (!update.data) return throwError("não foi possível validar o código");

    return throwSuccess(update.data);
  },
};

export type EmailSenderErrors =
  | "Não foi possível enviar o e-mail"
  | "não foi possível validar o código";
