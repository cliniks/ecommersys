/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
import { User } from "./user.entitie";
import { storeInfo } from "./store.entitie";
export declare const StoreSolicitateSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    isActive: boolean;
    owner: string;
    storeInfo?: {
        number?: string;
        cnpj?: string;
        cnae?: string;
        enterpriseSocial?: string;
        enterpriseName?: string;
        district?: string;
        address?: string;
        phone?: string;
        complement?: string;
        city?: string;
        state?: string;
        country?: string;
        zipCode?: string;
        email?: string;
    };
}>;
export declare type StoreSolicitate = {
    _id?: string;
    name: string;
    storeInfo: storeInfo;
    owner: string | User;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
