/// <reference types="mongoose-paginate" />
import mongoose from "mongoose";
declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    img: string;
    messages: any[];
    register: Date;
    username: string;
    password: string;
    wishList: any[];
    favorites: any[];
    likes: any[];
    access: number;
    cart: any[];
    myOrders: any[];
    buysUnderProcess: any[];
    myBuys: any[];
    melhorEnvioID?: string | undefined;
    wallet?: {
        history: any[];
        amount: number;
    } | undefined;
    gatewayPagId?: string | undefined;
    storeId?: string | undefined;
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
        birthdate?: string | undefined;
    } | undefined;
    storeData?: any;
}>;
export type UserModelType = {
    _id?: string;
    username: string;
    password: string;
    wallet: {
        amount: number;
        history: [];
    };
    img: string;
    userInfo: {
        name: string;
        lastName: string;
        fone: string;
        cpf: string;
        address: string;
        number: number;
        birthdate: string;
        complement: string;
        city: string;
        state: string;
        cep: string;
        email: string;
    };
    melhorEnvioID: string;
    gatewayPagId: string;
    myOrders: [];
    myBuys: [];
    buysUnderProcess: [];
    wishList: [];
    favorites: [];
    likes: [];
    messages: [];
    cart: [];
    storeId: String;
    storeData: {};
    access: number;
    register?: Date;
};
declare const UserModel: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
export { UserSchema, UserModel };
