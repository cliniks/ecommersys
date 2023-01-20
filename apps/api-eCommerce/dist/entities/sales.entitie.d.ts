/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const SalesSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    productsInfo: {
        amount?: number | undefined;
        size?: string | undefined;
        productId?: string | undefined;
    }[];
    buyer?: string | undefined;
    seller?: string | undefined;
}>;
export type Sales = {
    _id?: ObjectId;
    seller: string;
    buyer: string;
    isActive: boolean;
    productsInfo: ProductInfo[];
    createdAt?: Date;
    updatedAt?: Date;
};
export type ProductInfo = {
    productId: string;
    amount: number;
    size: string;
};
