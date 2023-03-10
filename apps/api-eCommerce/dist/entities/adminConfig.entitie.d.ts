/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const DocumentsAdminSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    documentTypes: string[];
}>;
export declare const GlobalCommissionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    scalable: {
        fixed?: number;
        percentage?: number;
        minValue?: number;
        maxValue?: number;
    }[];
    fixed?: number;
    percentage?: number;
    commissionType?: "percentage" | "fixed+percentage" | "fixed";
}>;
export declare type DocumentsAdminType = {};
export declare type CommissionType = {
    _id?: string;
    commissionType: "percentage" | "fixed+percentage" | "fixed";
    percentage: Number;
    fixed: Number;
    scalable: {
        minValue: Number;
        maxValue: Number;
        percentage: Number;
        fixed: Number;
    }[];
    updatedAt?: Date;
    createdAt?: Date;
};
