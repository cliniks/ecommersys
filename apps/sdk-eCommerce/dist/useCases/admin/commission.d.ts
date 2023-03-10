import { GlobalCommissionType, categoryCommissionType, productCommissionType, storeCommissionType } from "../../Entities";
import { ICategoryCommission, ICommission, IGlobalCommission, IProductCommission, IStoreCommission, getAllProps, getSingleProps } from "../../interfaces";
export declare class commission implements ICommission {
    Global: GlobalCommission;
    Product: ProductCommission;
    Category: CategoryCommission;
    Store: StoreCommission;
}
export declare class GlobalCommission implements IGlobalCommission<GlobalCommissionType> {
    getSingle: (props: getSingleProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<any>;
    updateOne: (props: {
        commissionId: string;
        data: Partial<GlobalCommissionType>;
    }) => Promise<any>;
}
export declare class ProductCommission implements IProductCommission<productCommissionType> {
    getSingle: (props: getSingleProps) => Promise<any>;
    getByStore: (storeId: string) => Promise<any>;
    add: (data: Partial<productCommissionType>) => Promise<any>;
    getAll: (props: getAllProps) => Promise<any>;
    updateOne: (props: {
        commissionId: string;
        data: Partial<productCommissionType>;
    }) => Promise<any>;
}
export declare class CategoryCommission implements ICategoryCommission<categoryCommissionType> {
    getSingle: (props: getSingleProps) => Promise<any>;
    getByStore: (storeId: string) => Promise<any>;
    add: (data: Partial<categoryCommissionType>) => Promise<any>;
    getAll: (props: getAllProps) => Promise<any>;
    updateOne: (props: {
        commissionId: string;
        data: Partial<categoryCommissionType>;
    }) => Promise<any>;
}
export declare class StoreCommission implements IStoreCommission<storeCommissionType> {
    getSingle: (props: getSingleProps) => Promise<any>;
    add: (data: Partial<storeCommissionType>) => Promise<any>;
    getAll: (props: getAllProps) => Promise<any>;
    updateOne: (props: {
        commissionId: string;
        data: Partial<storeCommissionType>;
    }) => Promise<any>;
}
