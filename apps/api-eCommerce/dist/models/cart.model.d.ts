/// <reference types="mongoose-paginate" />
import mongoose from "mongoose";
declare const CartSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    products: any[];
    register: Date;
    melhorEnvioID?: string | undefined;
    asaasApiKey?: string | undefined;
}>;
declare const CartModel: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
export { CartSchema, CartModel };
