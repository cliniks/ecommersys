/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const WalletSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    amount?: string | undefined;
    owner?: string | undefined;
}>;
export type Wallet = {
    _id?: ObjectId;
    owner: string;
    amount: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
