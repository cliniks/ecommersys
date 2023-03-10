/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
import { CommissionType } from "./adminConfig.entitie";
export declare const ProductCommissionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    scalable: {
        fixed?: number;
        percentage?: number;
        minValue?: number;
        maxValue?: number;
    }[];
    storeId?: string;
    fixed?: number;
    percentage?: number;
    commissionType?: "percentage" | "fixed+percentage" | "fixed";
    productId?: string;
}>;
export declare const CategoryCommissionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    scalable: {
        fixed?: number;
        percentage?: number;
        minValue?: number;
        maxValue?: number;
    }[];
    storeId?: string;
    fixed?: number;
    percentage?: number;
    commissionType?: "percentage" | "fixed+percentage" | "fixed";
    categoryId?: string;
}>;
export declare const StoreCommissionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    scalable: {
        fixed?: number;
        percentage?: number;
        minValue?: number;
        maxValue?: number;
    }[];
    storeId?: string;
    fixed?: number;
    percentage?: number;
    commissionType?: "percentage" | "fixed+percentage" | "fixed";
}>;
export declare type storeCommissionType = CommissionType & {
    storeId: string;
};
export declare type productCommissionType = storeCommissionType & {
    productId: string;
};
export declare type categoryCommissionType = storeCommissionType & {
    categoryId: string;
};
