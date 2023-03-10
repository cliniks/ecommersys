/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const WalletHistorySchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    owner?: string;
    description?: string;
    in?: number;
    out?: number;
    orderId?: string;
    transactionId?: string;
    operator?: string;
}>;
export declare type HistoryData = {
    _id?: string;
    owner: string;
    description: string;
    in?: number;
    out?: number;
    orderId?: string;
    transactionId?: string;
    isActive: boolean;
    operator: string;
    createdAt?: string;
    updateAt?: string;
};
