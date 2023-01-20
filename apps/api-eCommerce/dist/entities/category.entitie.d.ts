/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const CategorySchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    name?: string | undefined;
    owner?: string | undefined;
    description?: string | undefined;
    hierarchy?: string | undefined;
    isGlobal?: boolean | undefined;
}>;
export type Category = {
    _id?: ObjectId;
    name: String;
    description: String;
    hierarchy?: String;
    isGlobal?: Boolean;
    isActive: Boolean;
    owner?: String;
    createdAt?: Date;
    updatedAt?: Date;
};
