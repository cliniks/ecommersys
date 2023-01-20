/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const CouponSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    assined: any[];
    used: number;
    isCashBack: boolean;
    isFreeShipping: boolean;
    startDate: Date;
    name?: string | undefined;
    type?: string | undefined;
    owner?: string | undefined;
    value?: string | undefined;
    description?: string | undefined;
    minValue?: string | undefined;
    maxValue?: string | undefined;
    limitForUse?: number | undefined;
    endDate?: Date | undefined;
}>;
export type Coupon = {
    _id?: ObjectId;
    name: string;
    assined: string[];
    description: string;
    type: "percentage" | "fixed" | "shipping";
    value: string;
    minValue: string;
    maxValue?: String;
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
