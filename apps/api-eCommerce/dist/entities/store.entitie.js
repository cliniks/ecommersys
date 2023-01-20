"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.StoreSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    wallet: {
        amount: { type: Number, default: 0 },
        history: [],
    },
    img: {
        type: String,
        default: process.env.INITIAL_IMAGE,
    },
    banner: {
        type: String,
        default: process.env.INITIAL_IMAGE,
    },
    segments: [],
    storeInfo: {
        cnpj: String,
        address: String,
        number: Number,
        complement: String,
        city: String,
        state: String,
        cep: String,
        email: String,
    },
    isActive: { type: Boolean, default: true },
    melhorEnvioID: String,
    asaasID: String,
    asaasApiKey: String,
    owner: { type: String, required: true, unique: true },
    products: [],
    productsCount: { type: Number, default: 0 },
    statistics: {
        views: { type: Number, default: 0 },
        clients: [],
    },
    openOrders: [],
    salesHistory: [],
    salesToSend: [],
    messages: [],
    tokenStripe: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.StoreSchema.plugin(mongoose_paginate_1.default);
