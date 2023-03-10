/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const CouponSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    productsAssigned: string[];
    clientsAssigned: string[];
    storesAssigned: string[];
    categoriesAssigned: string[];
    usedIds: string[];
    used: number;
    isCashBack: boolean;
    isFreeShipping: boolean;
    startDate: Date;
    type?: string;
    value?: string;
    name?: string;
    owner?: string;
    minValue?: string;
    maxValue?: string;
    description?: string;
    limitForUse?: number;
    endDate?: Date;
}>;
export declare type Coupon = {
    _id?: string;
    name: string;
    productsAssigned: string[];
    clientsAssigned: string[];
    storesAssigned: string[];
    categoriesAssigned: string[];
    usedIds: string[];
    description: string;
    type: "percentage" | "fixed" | "shipping";
    value: string;
    minValue: string;
    maxValue?: string;
    used: number;
    limitForUse: number;
    isCashBack: boolean;
    startDate?: Date;
    endDate?: Date;
    isActive: boolean;
    isFreeShipping: boolean;
    owner: string;
    createdAt?: Date;
    updatedAt?: Date;
};
