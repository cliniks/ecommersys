/// <reference types="mongoose-paginate" />
import mongoose from "mongoose";
declare const StoreSolicitateSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    owner: string;
    register: Date;
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
}>;
declare const StoreSolicitateModel: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
export { StoreSolicitateSchema, StoreSolicitateModel };
