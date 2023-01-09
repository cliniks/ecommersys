import { Either } from "../../Errors/Either";
export declare const validateMutations: {
    confirmAppToken: (appToken: string) => Promise<Either<ConfirmAppTokenErrors, boolean>>;
    verifyUserToken: () => Promise<Either<ConfirmAppTokenErrors, boolean>>;
};
export declare type ConfirmAppTokenErrors = "Não foi possível validar";
