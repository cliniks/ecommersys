"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = exports.StoreSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const StoreSchema = new Schema({
    name: { type: String, required: true, unique: true },
    wallet: {
        amount: { type: Number, default: 0 },
        history: [],
    },
    img: {
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
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.StoreSchema = StoreSchema;
StoreSchema.plugin(mongoose_paginate_1.default);
const StoreModel = mongoose_1.default.model("store", StoreSchema);
exports.StoreModel = StoreModel;
