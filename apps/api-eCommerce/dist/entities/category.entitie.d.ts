/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const CategorySchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    isGlobal: boolean;
    name?: string;
    owner?: string;
    description?: string;
    hierarchy?: string;
}>;
export declare type Category = {
    _id?: string;
    name: string;
    description: string;
    hierarchy?: string;
    isGlobal?: Boolean;
    isActive: Boolean;
    owner?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
