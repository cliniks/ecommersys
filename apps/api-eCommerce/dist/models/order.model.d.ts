/// <reference types="mongoose-paginate" />
import mongoose from "mongoose";
declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    products: any[];
    register: Date;
    melhorEnvioID?: string | undefined;
    asaasApiKey?: string | undefined;
}>;
declare const OrderModel: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
export { OrderSchema, OrderModel };
