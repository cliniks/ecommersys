import { Either } from "../../Errors/Either";
export declare const authMutations: {
    auth: ({ username, password, }: {
        username: string;
        password: string;
    }) => Promise<Either<AuthErrors, authRes>>;
};
export declare type AuthErrors = "Campo senha não pode estar vazio" | "Campo username não pode estar vazio" | "Não foi possível autenticar";
export declare type authRes = {
    accessToken: string;
    userId: string;
    seller?: string;
};
