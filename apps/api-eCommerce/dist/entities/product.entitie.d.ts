/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const ProductSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    isActive: boolean;
    imgs: string[];
    partners: string[];
    discount: string[];
    categories: string[];
    tags: string[];
    hangTags: string[];
    owner?: string | undefined;
    statistics?: {
        favorites: string[];
        likers: string[];
        views?: number | undefined;
        likes?: number | undefined;
        favorite?: number | undefined;
        buys?: number | undefined;
    } | undefined;
    description?: string | undefined;
    price?: string | undefined;
    virtualProduct?: boolean | undefined;
    status?: boolean | undefined;
    shippingInfo?: {
        height?: string | undefined;
        width?: string | undefined;
        weight?: string | undefined;
    } | undefined;
    stockInfo?: {
        qnt?: number | undefined;
        sku?: string | undefined;
        SoldIndividually?: boolean | undefined;
    } | undefined;
}>;
export type Product = {
    _id?: ObjectId;
    name: string;
    description: string;
    price: string;
    imgs: string[];
    partners: string[];
    virtualProduct: boolean;
    isActive: boolean;
    shippingInfo: {
        height: String;
        width: String;
        weight: String;
    };
    owner: string;
    discount: discountType[];
    status: boolean;
    categories: [];
    statistics: {
        likes: number;
        likers: string[];
        views: number;
        favorite: number;
        favorites: string[];
        buys: number;
    };
    stockInfo: {
        qnt: number;
        sku: string;
        SoldIndividually: boolean;
    };
    tags: string[];
    hangTags: string[];
    createdAt?: Date;
    updatedAt?: Date;
};
export type discountType = {
    key: string[];
    type: string;
    active: boolean;
    percentage: number;
};
