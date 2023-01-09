import { Store } from "../../Entities";
import { Either } from "../../Errors/Either";
import { getAllProps } from "../../interfaces";
export declare const sellerMutations: {
    solicitation: (data: FormData) => Promise<Either<sellerErrors, Store>>;
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Either<sellerErrors, string>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Either<sellerErrors, string>>;
    getMyStore: () => Promise<Either<sellerErrors, Store>>;
    getOneStore: (key: string, value: string) => Promise<Either<sellerErrors, Store>>;
    getAllStore: (props: getAllProps) => Promise<Either<sellerErrors, Store>>;
    updateSellerInfo: (id: string, data: Partial<Store>) => Promise<Either<sellerErrors, Store>>;
    updateStoreImage: (formData: FormData) => Promise<Either<sellerErrors, Store>>;
    updateStoreBanner: (formData: FormData) => Promise<Either<sellerErrors, Store>>;
    getMyProducts: (props: getAllProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    getMyCategories: (props: getAllProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
    getMyCoupons: (props: getAllProps) => Promise<import("../../Errors/Either").isSuccess<any> | import("../../Errors/Either").isError<string>>;
};
export declare type sellerErrors = "Não foi possível encontrar este Usuário" | "Não foi possível atualizar este Usuário" | "Não foi possível atualizar usuário" | "Não foi possível enviar o e-mail" | "não foi possível validar o código" | "Não foi possível criar o usuário" | "Não foi possível encontrar produtos desse Seller";
