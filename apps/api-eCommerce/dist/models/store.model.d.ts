/// <reference types="mongoose-paginate" />
import mongoose from "mongoose";
declare const StoreSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    img: string;
    segments: any[];
    owner: string;
    products: any[];
    productsCount: number;
    openOrders: any[];
    salesHistory: any[];
    salesToSend: any[];
    messages: any[];
    register: Date;
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
declare const StoreModel: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
export { StoreSchema, StoreModel };
