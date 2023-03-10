/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const StoreSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    img: string;
    isActive: boolean;
    owner: string;
    products: import("mongoose").Types.DocumentArray<any> | any[];
    messages: import("mongoose").Types.DocumentArray<any> | any[];
    banner: string;
    segments: import("mongoose").Types.DocumentArray<any> | any[];
    productsCount: number;
    openOrders: import("mongoose").Types.DocumentArray<any> | any[];
    salesHistory: import("mongoose").Types.DocumentArray<any> | any[];
    salesToSend: import("mongoose").Types.DocumentArray<any> | any[];
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
    melhorEnvioID?: string;
    wallet?: {
        amount: number;
        history: import("mongoose").Types.DocumentArray<any> | any[];
    };
    statistics?: {
        views: number;
        clients: import("mongoose").Types.DocumentArray<any> | any[];
    };
    asaasID?: string;
    asaasWalletId?: string;
    asaasApiKey?: string;
    tokenStripe?: string;
}>;
export declare type Store = {
    _id?: string;
    name: string;
    wallet?: wallet;
    img?: string;
    banner?: string;
    segments?: [];
    storeInfo: storeInfo;
    melhorEnvioID?: string;
    asaasID?: string;
    asaasWalletId?: string;
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
export declare type wallet = {
    amount: number;
    history: [];
};
export declare type storeInfo = {
    cnpj: string;
    cnae: string;
    address: string;
    number: string;
    complement: string;
    enterpriseSocial: string;
    enterpriseName: string;
    phone: string;
    city: string;
    state: string;
    country: string;
    district: string;
    zipCode: string;
    email: string;
};
export declare type statistics = {
    views: number;
    clients: string[];
};
