/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const CartSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
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
}>;
export type Cart = {
    _id?: ObjectId;
    buyer: string;
    isActive: boolean;
    productsInfo: ProductInfo[];
    createdAt?: Date;
    uodatedAt?: Date;
};
export type ProductInfo = {
    productId: string;
    amount: number;
    size: string;
};
