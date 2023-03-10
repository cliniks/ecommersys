/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const appSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    username?: string;
    password?: string;
    tokens?: {
        appToken?: string;
        devAppToken?: string;
    };
    appInfo?: {
        number?: number;
        name?: string;
        cnpj?: string;
        address?: string;
        complement?: string;
        city?: string;
        state?: string;
        email?: string;
        cep?: string;
    };
}>;
export declare type App = {
    _id?: string;
    tokens: Tokens;
    appInfo: AppInfo;
    username: string;
    isActive: boolean;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type Tokens = {
    appToken: string;
    devAppToken: string;
};
export declare type AppInfo = {
    name: string;
    cnpj: string;
    address: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
};
