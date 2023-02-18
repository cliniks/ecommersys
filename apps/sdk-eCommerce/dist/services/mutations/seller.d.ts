import { Store } from "../../Entities";
import { Address } from "../../Entities/address.entitie";
import { StorePolicy } from "../../Entities/store.policies.entitie";
import { Either } from "../../Errors/Either";
import { getAllProps, getSingleProps } from "../../interfaces";
export declare const sellerMutations: {
    sendEmailToken: (data: {
        email: string;
    }) => Promise<Either<sellerErrors, string>>;
    confirmEmailToken: (data: {
        email: string;
        code: number;
    }) => Promise<Either<sellerErrors, string>>;
    getMyStore: () => Promise<Either<sellerErrors, Store>>;
    getOneStore: ({ key, value, }: {
        key: string;
        value: string;
    }) => Promise<Either<sellerErrors, Store>>;
    getAllStore: (props: getAllProps) => Promise<Either<sellerErrors, Store>>;
    updateSellerInfo: ({ id, data, }: {
        id: string;
        data: Partial<Store>;
    }) => Promise<Either<sellerErrors, Store>>;
    updateStoreImage: (formData: FormData) => Promise<Either<sellerErrors, Store>>;
    updateStoreBanner: (formData: FormData) => Promise<Either<sellerErrors, Store>>;
    getMyProducts: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyCategories: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyCoupons: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getOneAddress: (props: getSingleProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyAddress: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    addAddress: (data: Address) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    updateAddress: ({ addressId, data, }: {
        addressId: string;
        data: Partial<Address>;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    deleteAddress: ({ addressId }: {
        addressId: string;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getOnePolicy: (props: getSingleProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    getMyPolicies: (props: getAllProps) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    addPolicy: (data: StorePolicy) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    updatePolicy: ({ policyId, data, }: {
        policyId: string;
        data: Partial<StorePolicy>;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
    deletePolicy: ({ policyId, }: {
        policyId: string;
        data: Partial<StorePolicy>;
    }) => Promise<import("../../Errors/Either").isError<string> | import("../../Errors/Either").isSuccess<any>>;
};
export declare type sellerErrors = "Não foi possível encontrar este Usuário" | "Não foi possível atualizar este Usuário" | "Não foi possível atualizar usuário" | "Não foi possível enviar o e-mail" | "não foi possível validar o código" | "Não foi possível criar o usuário" | "Não foi possível encontrar produtos desse Seller";
