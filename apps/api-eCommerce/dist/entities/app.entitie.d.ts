/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const appSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    username?: string | undefined;
    password?: string | undefined;
    tokens?: {
        appToken?: string | undefined;
        devAppToken?: string | undefined;
    } | undefined;
    appInfo?: {
        number?: number | undefined;
        name?: string | undefined;
        cnpj?: string | undefined;
        address?: string | undefined;
        complement?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        cep?: string | undefined;
        email?: string | undefined;
    } | undefined;
}>;
export type App = {
    _id?: ObjectId;
    tokens: Tokens;
    appInfo: AppInfo;
    username: string;
    isActive: boolean;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type Tokens = {
    appToken: string;
    devAppToken: string;
};
export type AppInfo = {
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
