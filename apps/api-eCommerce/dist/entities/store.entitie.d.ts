/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const StoreSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    img: string;
    banner: string;
    segments: any[];
    isActive: boolean;
    owner: string;
    products: any[];
    productsCount: number;
    openOrders: any[];
    salesHistory: any[];
    salesToSend: any[];
    messages: any[];
    melhorEnvioID?: string | undefined;
    asaasID?: string | undefined;
    asaasApiKey?: string | undefined;
    wallet?: {
        history: any[];
        amount: number;
    } | undefined;
    storeInfo?: {
        number?: number | undefined;
        cnpj?: string | undefined;
        address?: string | undefined;
        complement?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        cep?: string | undefined;
        email?: string | undefined;
    } | undefined;
    statistics?: {
        views: number;
        clients: any[];
    } | undefined;
    tokenStripe?: string | undefined;
}>;
export type Store = {
    _id?: ObjectId;
    name: string;
    wallet?: wallet;
    img?: string;
    banner?: string;
    segments?: [];
    storeInfo: storeInfo;
    melhorEnvioID?: string;
    asaasID?: string;
    asaasApiKey?: string;
    owner: string;
    products?: string[];
    productsCount?: number;
    isActive: boolean;
    statistics?: statistics;
    openOrders?: [];
    salesHistory?: [];
    salesToSend?: [];
    messages?: [];
    tokenStripe?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type wallet = {
    amount: number;
    history: [];
};
export type storeInfo = {
    cnpj: string;
    address: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
};
export type statistics = {
    views: number;
    clients: string[];
};
