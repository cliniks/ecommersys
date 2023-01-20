import { Either } from "../../Errors";
export declare const uploadMutations: {
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Either<EmailSenderErrors, any>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Either<EmailSenderErrors, any>>;
    uploadImage: (data: FormData) => Promise<Either<ImageSenderErrors, string>>;
};
export declare type EmailSenderErrors = "Não foi possível enviar o e-mail" | "não foi possível validar o código";
export declare type ImageSenderErrors = "Não foi possível efetuar o upload a imagem";
