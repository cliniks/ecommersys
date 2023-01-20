import { Either, throwError, throwSuccess } from "../../Errors";
import { apiEcommerce } from "../axiosInstances";

export const uploadMutations = {
  sendEmailToken: async (data: {
    email: string;
  }): Promise<Either<EmailSenderErrors, any>> => {
    const update = await apiEcommerce.post(`/users/createEmailToken`, data);

    if (!update.data) return throwError("Não foi possível enviar o e-mail");

    return throwSuccess(update.data);
  },

  confirmEmailToken: async (data: {
    email: string;
    code: number;
  }): Promise<Either<EmailSenderErrors, any>> => {
    const update = await apiEcommerce.post(`/users/confirmEmailToken`, data);

    if (!update.data) return throwError("não foi possível validar o código");

    return throwSuccess(update.data);
  },

  uploadImage: async (
    data: FormData
  ): Promise<Either<ImageSenderErrors, string>> => {
    const upload = await apiEcommerce.post("/globals/addImage", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (!upload)
      return throwError("Não foi possível efetuar o upload a imagem");

    return throwSuccess(upload.data);
  },
};

export type EmailSenderErrors =
  | "Não foi possível enviar o e-mail"
  | "não foi possível validar o código";

export type ImageSenderErrors = "Não foi possível efetuar o upload a imagem";
