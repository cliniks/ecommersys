import { Store, StoreSolicitate } from "../../Entities";
import { Either } from "../../Errors/Either";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
export declare const adminMutations: {
    acceptSellerSolicitation: ({ solicitationId, }: {
        solicitationId: string;
    }) => Promise<Either<adminErrors, Store>>;
    rejectSellerSolicitation: ({ solicitationId, }: {
        solicitationId: string;
    }) => Promise<Either<adminErrors, Store>>;
    getAllSellersSolicitation: (props: getAllProps) => Promise<Either<adminErrors, getAllReturn<StoreSolicitate>>>;
    getSingleSellersSolicitation: (props: getSingleProps) => Promise<Either<adminErrors, StoreSolicitate>>;
    commissions: {
        GlobalCommission: {
            getSingle: ({ key, value, }: getSingleProps) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").CommissionType>>;
            getAll: (props: getAllProps) => Promise<Either<import("./commission").commissionErrors, getAllReturn<import("../../Entities").CommissionType>>>;
            update: ({ commissionId, data, }: {
                commissionId: string;
                data: Partial<import("../../Entities").CommissionType>;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").CommissionType>>;
        };
        StoreCommission: {
            getSingle: ({ key, value, }: {
                key: string;
                value: string;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").storeCommissionType>>;
            getAll: (props: getAllProps) => Promise<Either<import("./commission").commissionErrors, getAllReturn<import("../../Entities").storeCommissionType>>>;
            add: (data: Partial<import("../../Entities").storeCommissionType>) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").storeCommissionType>>;
            update: ({ commissionId, data, }: {
                commissionId: string;
                data: Partial<import("../../Entities").storeCommissionType>;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").storeCommissionType>>;
        };
        CategoryCommission: {
            getSingle: ({ key, value, }: {
                key: string;
                value: string;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").categoryCommissionType>>;
            getByStore: (storeId: string) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").categoryCommissionType[]>>;
            add: (data: Partial<import("../../Entities").categoryCommissionType>) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").categoryCommissionType>>;
            getAll: (props: getAllProps) => Promise<Either<import("./commission").commissionErrors, getAllReturn<import("../../Entities").categoryCommissionType>>>;
            update: ({ commissionId, data, }: {
                commissionId: string;
                data: Partial<import("../../Entities").categoryCommissionType>;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").categoryCommissionType>>;
        };
        ProductCommission: {
            getSingle: ({ key, value, }: {
                key: string;
                value: string;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").productCommissionType>>;
            getByStore: (storeId: string) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").productCommissionType[]>>;
            add: (data: Partial<import("../../Entities").productCommissionType>) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").productCommissionType>>;
            getAll: (props: getAllProps) => Promise<Either<import("./commission").commissionErrors, getAllReturn<import("../../Entities").productCommissionType>>>;
            update: ({ commissionId, data, }: {
                commissionId: string;
                data: Partial<import("../../Entities").productCommissionType>;
            }) => Promise<Either<import("./commission").commissionErrors, import("../../Entities").productCommissionType>>;
        };
    };
};
export declare type adminErrors = "Não foi possível liberar acesso" | "Não foi possível encontrar";
