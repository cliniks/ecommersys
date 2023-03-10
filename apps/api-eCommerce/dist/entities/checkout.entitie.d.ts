/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const Checkout: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    coupons: string[];
    store: {
        products: {
            value?: string;
            discount?: string;
            qnt?: number;
            productId?: string;
        }[];
        value?: string;
        storeId?: string;
        discount?: string;
        meValuePreview?: string;
    }[];
    paymentMethods: {
        value?: string;
        paymentType?: string;
        paymentMethodId?: string;
    }[];
    address?: {
        number?: string;
        district?: string;
        address?: string;
        complement?: string;
        city?: string;
        state?: string;
        country?: string;
        zipCode?: string;
    };
    owner?: string;
    totalValue?: string;
    totalDiscount?: string;
}>;
export declare type Checkout = {
    _id?: string;
    owner: string;
    products: CheckoutProducts[];
    isActive: boolean;
    address: {
        district: string;
        address: string;
        number: string;
        complement: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    paymentMethods: CheckoutPaymentMethods[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type CheckoutPaymentMethods = {
    paymentType: string;
    value: string;
    paymentMethodId: string;
};
export declare type CheckoutStore = {
    storeId: string;
    products: CheckoutProducts[];
    meValuePreview?: string;
    value?: String;
    discount?: String;
};
export declare type CheckoutProducts = {
    productId: string;
    qnt: number;
    value?: String;
    discount?: String;
};
