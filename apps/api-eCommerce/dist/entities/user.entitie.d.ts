/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    img: string;
    isActive: boolean;
    username: string;
    password: string;
    wishList: any[];
    favorites: any[];
    likes: any[];
    access: number;
    melhorEnvioID?: string | undefined;
    wallet?: string | undefined;
    statistics?: {
        productsViews: string[];
    } | undefined;
    gatewayPagId?: string | undefined;
    gatewayPagApiKey?: string | undefined;
    storeId?: string | undefined;
    orders?: number | undefined;
    userInfo?: {
        number?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
        complement?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        cep?: string | undefined;
        email?: string | undefined;
        lastName?: string | undefined;
        fone?: string | undefined;
        cpf?: string | undefined;
        birthDate?: string | undefined;
    } | undefined;
}>;
export type User = {
    _id?: ObjectId;
    username: string;
    password: string;
    wallet: string;
    img: string;
    userInfo: userInfo;
    melhorEnvioID: string;
    gatewayPagId: string;
    gatewayPagApiKey: string;
    wishList: string[];
    favorites: string[];
    likes: string[];
    storeId: string;
    statistics: userStatistics;
    isActive: boolean;
    access: 0 | 1 | 2 | 99;
    orders: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export type userInfo = {
    name: string;
    lastName: string;
    fone: string;
    cpf: string;
    address: string;
    number: Number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
};
export type userStatistics = {
    productsViews: string[];
};
