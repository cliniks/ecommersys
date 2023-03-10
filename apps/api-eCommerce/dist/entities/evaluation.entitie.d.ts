/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const EvaluationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    owner?: string;
    productId?: string;
    stars?: number;
}>;
export declare type Evaluation = {
    _id?: string;
    productId: string;
    isActive: boolean;
    stars: number;
    owner: string;
    createdAt?: Date;
    updatedAt?: Date;
};
