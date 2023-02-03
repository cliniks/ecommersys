import { StoreSolicitate, User, UserInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { DocumentsType } from "../../Entities/documents.entitie";
import { Either } from "../../Errors/Either";
import { getAllProps, getSingleProps } from "../../interfaces";
export declare const userMutations: {
    sellerSolicitation: (data: StoreSolicitate) => Promise<Either<userErrors, StoreSolicitate>>;
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
    updateUserInfo: ({ id, data, }: {
        id: string;
        data: Partial<UserInfo>;
    }) => Promise<Either<userErrors, User>>;
    updateUserImage: ({ id, img, }: {
        id: string;
        img: any;
    }) => Promise<Either<userErrors, User>>;
    getOneAddress: (props: getSingleProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    getMyAddress: (props: getAllProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    addAddress: (data: Address) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    updateAddress: ({ addressId, data, }: {
        addressId: string;
        data: Partial<Address>;
    }) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    deleteAddress: ({ addressId }: {
        addressId: string;
    }) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    getMyDocuments: (props: getAllProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    getSingleDocument: (props: getSingleProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    addDocument: (data: Address) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    updateDocument: ({ documentId, data, }: {
        documentId: string;
        data: Partial<DocumentsType>;
    }) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    deleteDocument: ({ documentId }: {
        documentId: string;
    }) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
};
export declare type userErrors = "Não foi possível encontrar este Usuário" | "Não foi possível atualizar este Usuário" | "Não foi possível atualizar usuário" | "Não foi possível enviar o e-mail" | "não foi possível validar o código" | "Não foi possível criar o usuário" | "Não foi possível deletar documento" | "Não foi possível encontrar documento" | "Não foi possível solicitar" | "Não foi possível adicionar documento";
