import { CommissionType } from "./admin.entitie";
export declare type storeCommissionType = CommissionType & {
    storeId: string;
};
export declare type productCommissionType = CommissionType & {
    productId: string;
};
export declare type categoryCommissionType = CommissionType & {
    categoryId: string;
};
