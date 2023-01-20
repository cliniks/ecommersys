/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
import { storeInfo } from "./store.entitie";
export declare const StoreSolicitateSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    isActive: boolean;
    owner: string;
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
export type StoreSolicitate = {
    name: string;
    storeInfo: storeInfo;
    isActive: boolean;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
};
