/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const AddressSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    number?: string;
    district?: string;
    address?: string;
    complement?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    owner?: string;
}>;
export declare type Address = {
    _id?: string;
    owner: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    createdAt?: string;
    updatedAt?: string;
};
