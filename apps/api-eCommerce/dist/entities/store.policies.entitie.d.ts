/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const StorePoliciesSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    isActive: boolean;
    owner: string;
    body: string;
    type?: string;
    status?: string;
}>;
export declare type StorePolicy = {
    name: string;
    body: string;
    status: string;
    owner: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
