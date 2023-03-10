/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
import { ProductsReturn } from "./cart.entitie";
export declare const paymentStatus: string[];
export declare const SalesSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    coupons: string[];
    sellers: {
        products: {
            imgs: string[];
            categories: string[];
            _id?: string;
            name?: string;
            owner?: string;
            price?: string;
            regularPrice?: string;
            virtualProduct?: boolean;
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
        }[];
        coupons: string[];
        storeId?: string;
        walletId?: string;
    }[];
    storeIds: string[];
    totalValue?: number;
    totalDiscount?: number;
    userId?: string;
    addressId?: string;
    totalItems?: number;
    paymentId?: string;
    payment?: {
        id?: string;
        amount?: number;
        paymentMethod?: string;
        cardToken?: string;
    };
    billingType?: "BOLETO" | "CREDIT_CARD" | "UNDEFINED" | "TRANSFER" | "DEPOSIT" | "PIX";
    paymentStatus?: string;
}>;
export declare type Sales = {
    _id?: string;
    sellers: StoreMapped[];
    userId: string;
    addressId: string;
    payment?: {
        amount: number;
        paymentMethod: string;
        cardToken: string;
        id: string;
    };
    coupons: string[];
    totalValue: number;
    totalDiscount: number;
    totalItems: number;
    billingType: billingType;
    paymentStatus?: paymentTypes;
    paymentId?: string;
    storeIds: string[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type ProductSaleInfo = {
    productId: string;
    amount: number;
};
export declare type StoreMapped = {
    storeId: string;
    products: ProductsReturn[];
    totalPrice: number;
    walletId: string;
    totalDiscount: number;
    coupons: string[];
};
export declare type paymentTypes = "PENDING" | "RECEIVED" | "CONFIRMED" | "OVERDUE" | "REFUNDED" | "REFUND_REQUESTED" | "CHARGEBACK_REQUESTED" | "CHARGEBACK_DISPUTE" | "AWAITING_CHARGEBACK_REVERSAL" | "DUNNING_REQUESTED" | "AWAIT_RISK_ANALYSIS";
export declare type billingType = "BOLETO" | "CREDIT_CARD" | "UNDEFINED" | "TRANSFER" | "DEPOSIT" | "PIX";
