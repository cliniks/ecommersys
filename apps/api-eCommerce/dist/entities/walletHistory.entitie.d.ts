/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const WalletHistorySchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    owner?: string | undefined;
    out?: number | undefined;
    description?: string | undefined;
    in?: number | undefined;
    orderId?: string | undefined;
    transactionId?: string | undefined;
    operator?: string | undefined;
}>;
export type HistoryData = {
    _id?: ObjectId;
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
