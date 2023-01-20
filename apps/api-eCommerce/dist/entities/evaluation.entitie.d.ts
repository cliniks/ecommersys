/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const EvaluationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    owner?: string | undefined;
    productId?: string | undefined;
    stars?: number | undefined;
}>;
export type Evaluation = {
    _id?: ObjectId;
    productId: string;
    isActive: boolean;
    stars: number;
    owner: string;
    createdAt?: Date;
    updatedAt?: Date;
};
