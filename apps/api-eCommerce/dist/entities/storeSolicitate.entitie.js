"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSolicitateSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.StoreSolicitateSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    storeInfo: {
        cnpj: String,
        cnae: String,
        address: String,
        number: String,
        complement: String,
        enterpriseSocial: String,
        enterpriseName: String,
        phone: String,
        city: String,
        state: String,
        country: String,
        district: String,
        zipCode: String,
        email: String,
    },
    isActive: { type: Boolean, default: true },
    owner: { type: String, required: true },
}, {
    timestamps: true,
});
exports.StoreSolicitateSchema.plugin(mongoose_paginate_1.default);
