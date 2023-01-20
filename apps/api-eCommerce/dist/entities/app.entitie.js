"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.appSchema = new mongoose_1.Schema({
    tokens: {
        appToken: String,
        devAppToken: String,
    },
    username: String,
    password: String,
    appInfo: {
        name: String,
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
}, {
    timestamps: true,
});
exports.appSchema.plugin(mongoose_paginate_1.default);
