import { Either } from "../../Errors";
export declare const emailSenderMutations: {
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Either<EmailSenderErrors, any>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Either<EmailSenderErrors, any>>;
};
export declare type EmailSenderErrors = "Não foi possível enviar o e-mail" | "não foi possível validar o código";
