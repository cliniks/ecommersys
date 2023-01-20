"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSolicitateModel = exports.StoreSolicitateSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const StoreSolicitateSchema = new Schema({
    name: { type: String, required: true, unique: true },
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
    owner: { type: String, required: true, unique: true },
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.StoreSolicitateSchema = StoreSolicitateSchema;
StoreSolicitateSchema.plugin(mongoose_paginate_1.default);
const StoreSolicitateModel = mongoose_1.default.model("storeSolicitate", StoreSolicitateSchema);
exports.StoreSolicitateModel = StoreSolicitateModel;
