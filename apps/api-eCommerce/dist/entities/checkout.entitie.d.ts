/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const Checkout: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    products: {
        items: any[];
        storeId?: string | undefined;
        meValuePreview?: string | undefined;
        store?: any;
    }[];
    owner?: string | undefined;
    meId?: string | undefined;
    asaasId?: string | undefined;
}>;
export type Checkout = {
    _id?: ObjectId;
    owner: String;
    products: Products[];
    isActive: boolean;
    meId: String;
    asaasId: String;
    createdAt?: Date;
    updatedAt?: Date;
};
export type Products = {
    storeId: String;
    store: {};
    items: [];
    meValuePreview: String;
};
