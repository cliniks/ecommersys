/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const ProductSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    isActive: boolean;
    imgs: string[];
    partners: string[];
    discount: {
        key: string[];
        type?: string;
        percentage?: number;
        active?: boolean;
    }[];
    categories: string[];
    tags: string[];
    hangTags: string[];
    statistics?: {
        favorites: string[];
        likers: string[];
        likes?: number;
        views?: number;
        favorite?: number;
        buys?: number;
    };
    owner?: string;
    description?: string;
    price?: string;
    regularPrice?: string;
    virtualProduct?: boolean;
    status?: boolean;
    shippingInfo?: {
        length?: string;
        height?: string;
        width?: string;
        weight?: string;
    };
    stockInfo?: {
        qnt?: number;
        sku?: string;
        SoldIndividually?: boolean;
    };
}>;
export declare type Product = {
    _id?: string;
    name: string;
    description: string;
    price: string;
    regularPrice: string;
    imgs: string[];
    partners: string[];
    virtualProduct: boolean;
    isActive: boolean;
    shippingInfo: {
        height: string;
        width: string;
        weight: string;
        length: string;
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
export declare type discountType = {
    key: string[];
    type: string;
    active: boolean;
    percentage: number;
};
