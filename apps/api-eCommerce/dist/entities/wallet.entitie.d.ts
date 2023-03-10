/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const WalletSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    owner?: string;
    amount?: string;
}>;
export declare type Wallet = {
    _id?: string;
    owner: string;
    amount: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
