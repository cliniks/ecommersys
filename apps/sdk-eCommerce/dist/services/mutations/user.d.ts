import { StoreSolicitate, User, userInfo } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { DocumentsType } from "../../Entities/documents.entitie";
import { Either } from "../../Errors/Either";
import { getAllProps, getSingleProps } from "../../interfaces";
export declare const userMutations: {
    sellerSolicitation: (data: StoreSolicitate) => Promise<Either<userErrors, StoreSolicitate>>;
    verifySolicitation: (id: string) => Promise<Either<userErrors, StoreSolicitate>>;
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
        data: Partial<userInfo>;
    }) => Promise<Either<userErrors, User>>;
    updateUserImage: ({ id, img, }: {
        id: string;
        img: any;
    }) => Promise<Either<userErrors, User>>;
    getOneAddress: (props: getSingleProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyAddress: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    addAddress: (data: Address) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    setDefaultAddress: (addressId: string) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    updateAddress: ({ addressId, data, }: {
        addressId: string;
        data: Partial<Address>;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    deleteAddress: ({ addressId }: {
        addressId: string;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyDocuments: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getAllDocuments: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getSingleDocument: (props: getSingleProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    addDocument: (data: Address) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    updateDocument: ({ documentId, data, }: {
        documentId: string;
        data: Partial<DocumentsType>;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    deleteDocument: ({ documentId }: {
        documentId: string;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
};
export declare type userErrors = "Não foi possível encontrar este Usuário" | "Não foi possível atualizar este Usuário" | "Não foi possível atualizar usuário" | "Não foi possível enviar o e-mail" | "não foi possível validar o código" | "Não foi possível criar o usuário" | "Não foi possível deletar documento" | "Não foi possível encontrar documento" | "Não foi possível solicitar" | "Não foi possível adicionar documento";
