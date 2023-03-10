import { CommissionType } from "./admin.entitie";
export declare type storeCommissionType = CommissionType & {
    storeId: string;
};
export declare type productCommissionType = storeCommissionType & {
    name: string;
    productId: string;
};
export declare type categoryCommissionType = storeCommissionType & {
    name: string;
    categoryId: string;
};
