import { User, UserInfo } from "../../Entities";
import { Either } from "../../Errors/Either";
export declare const userMutations: {
    createNewUser: (data: FormData) => Promise<Either<userErrors, User>>;
    seeProduct: (productId: string) => Promise<Either<userErrors, User>>;
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Either<userErrors, string>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Either<userErrors, string>>;
    getMyUser: () => Promise<Either<userErrors, User>>;
    updateUserInfo: (id: string, data: Partial<UserInfo>) => Promise<Either<userErrors, User>>;
    updateUserImage: (id: string, img: any) => Promise<Either<userErrors, User>>;
};
export declare type userErrors = "Não foi possível encontrar este Usuário" | "Não foi possível atualizar este Usuário" | "Não foi possível atualizar usuário" | "Não foi possível enviar o e-mail" | "não foi possível validar o código" | "Não foi possível criar o usuário";
