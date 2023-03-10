/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const LeadSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    phone?: string;
    email?: string;
}>;
export declare type LeadType = {
    _id?: string;
    email: string;
    name: string;
    phone: string;
};
