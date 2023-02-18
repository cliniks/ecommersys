import { GlobalCommissionType, categoryCommissionType, productCommissionType, storeCommissionType } from "../../Entities";
import { Either } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
export declare type commissionErrors = "Não foi possível achar o commissão" | "Não foi possível atualizar comissão" | "Não foi possível encontrar comissões" | "Não foi possível criar a commissão";
export declare const commissions: {
    GlobalCommission: {
        getSingle: ({ key, value, }: getSingleProps) => Promise<Either<commissionErrors, GlobalCommissionType>>;
        getAll: (props: getAllProps) => Promise<Either<commissionErrors, getAllReturn<GlobalCommissionType>>>;
        update: ({ commissionId, data, }: {
            commissionId: string;
            data: Partial<GlobalCommissionType>;
        }) => Promise<Either<commissionErrors, GlobalCommissionType>>;
    };
    StoreCommission: {
        getSingle: ({ key, value, }: {
            key: string;
            value: string;
        }) => Promise<Either<commissionErrors, storeCommissionType>>;
        getAll: (props: getAllProps) => Promise<Either<commissionErrors, getAllReturn<storeCommissionType>>>;
        add: (data: Partial<storeCommissionType>) => Promise<Either<commissionErrors, storeCommissionType>>;
        update: ({ commissionId, data, }: {
            commissionId: string;
            data: Partial<storeCommissionType>;
        }) => Promise<Either<commissionErrors, storeCommissionType>>;
    };
    CategoryCommission: {
        getSingle: ({ key, value, }: {
            key: string;
            value: string;
        }) => Promise<Either<commissionErrors, categoryCommissionType>>;
        add: (data: Partial<categoryCommissionType>) => Promise<Either<commissionErrors, categoryCommissionType>>;
        getAll: (props: getAllProps) => Promise<Either<commissionErrors, getAllReturn<categoryCommissionType>>>;
        update: ({ commissionId, data, }: {
            commissionId: string;
            data: Partial<categoryCommissionType>;
        }) => Promise<Either<commissionErrors, categoryCommissionType>>;
    };
    ProductCommission: {
        getSingle: ({ key, value, }: {
            key: string;
            value: string;
        }) => Promise<Either<commissionErrors, productCommissionType>>;
        add: (data: Partial<productCommissionType>) => Promise<Either<commissionErrors, productCommissionType>>;
        getAll: (props: getAllProps) => Promise<Either<commissionErrors, getAllReturn<productCommissionType>>>;
        update: ({ commissionId, data, }: {
            commissionId: string;
            data: Partial<productCommissionType>;
        }) => Promise<Either<commissionErrors, productCommissionType>>;
    };
};
