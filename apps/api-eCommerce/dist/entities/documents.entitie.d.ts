/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const DocumentsSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    valid: boolean;
    type?: string;
    owner?: string;
    obs?: string;
    title?: string;
    links?: {
        front?: string;
        back?: string;
    };
}>;
export declare type DocumentsType = {
    _id?: string;
    title: string;
    links: {
        front: string;
        back: string;
    };
    type: possibleDocumentTypes;
    owner: string;
    valid: boolean;
    obs: string;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type possibleDocumentTypes = "cnpj" | "identidadePessoal" | "contratoSocial" | "cro" | "crm" | "crbm" | "crf" | "crt" | "alvara" | "receituario" | "cartaCiencia" | "lgpd" | "certificado";
