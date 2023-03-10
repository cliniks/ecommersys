/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
import { Product } from "./product.entitie";
export declare const CartSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    products: import("mongoose").Types.DocumentArray<any> | any[];
    coupons: string[];
    owner?: string;
}>;
export declare type Cart = {
    _id?: string;
    owner: string;
    isActive: boolean;
    products: ProductInfo[];
    coupons: string[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type ProductInfo = {
    productId: string;
    amount: number;
};
export declare type CartReturn = {
    _id?: string;
    owner: string;
    isActive: boolean;
    products: ProductsReturn[];
    coupons: string[];
    totalPrice: number;
    totalDiscount: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type ProductsReturn = ProductInfo & Partial<Product> & {
    discountValue: string;
    couponApplied: string;
    totalValue: string;
};
