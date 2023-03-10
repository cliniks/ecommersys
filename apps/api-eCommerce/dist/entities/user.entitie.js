"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    wallet: { type: String },
    img: {
        type: String,
        default: process.env.INITIAL_IMAGE,
    },
    isActive: { type: Boolean, default: true },
    userInfo: {
        name: String,
        lastName: String,
        personType: String,
        cpf: String,
        cnpj: String,
        cnae: String,
        enterpriseSocial: String,
        enterpriseName: String,
        district: String,
        address: String,
        number: String,
        phone: String,
        complement: String,
        birthDate: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
        email: String,
        defaultAddress: String,
    },
    melhorEnvioID: String,
    gatewayPagId: String,
    gatewayPagApiKey: String,
    wishList: [],
    favorites: [],
    likes: [],
    storeId: String,
    orders: Number,
    access: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 99],
    },
    statistics: {
        productsViews: [String],
    },
}, {
    timestamps: true,
});
exports.UserSchema.plugin(mongoose_paginate_1.default);
