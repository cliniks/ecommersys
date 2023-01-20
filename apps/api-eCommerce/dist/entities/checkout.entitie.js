"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.Checkout = new mongoose_1.Schema({
    owner: String,
    products: [
        {
            storeId: String,
            store: {},
            items: [],
            meValuePreview: String,
        },
    ],
    isActive: { type: Boolean, default: true },
    meId: String,
    asaasId: String,
}, {
    timestamps: true,
});
exports.Checkout.plugin(mongoose_paginate_1.default);
