/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const PaymentMethodScheema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    owner?: string;
    creditCardNumber?: string;
    creditCardBrand?: string;
    creditCardToken?: string;
}>;
export declare type PaymentMethodType = {
    _id?: string;
    owner: string;
    creditCardNumber: string;
    creditCardBrand: string;
    creditCardToken: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type TokenCard = {
    creditCardNumber: string;
    creditCardBrand: string;
    creditCardToken: string;
};
export declare type tokenizeType = {
    customer: string;
    creditCard: {
        holderName: string;
        number: string;
        expiryMonth: string;
        expiryYear: string;
        ccv: string;
    };
    creditCardHolderInfo: {
        name: string;
        email: string;
        cpfCnpj: string;
        postalCode: string;
        addressNumber: string;
        addressComplement: string;
        phone: string;
        mobilePhone: string;
    };
};
