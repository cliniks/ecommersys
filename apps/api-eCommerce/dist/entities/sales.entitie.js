"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.SalesSchema = new mongoose_1.Schema({
    seller: String,
    buyer: String,
    productsInfo: [
        {
            productId: String,
            amount: Number,
            size: String,
        },
    ],
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.SalesSchema.plugin(mongoose_paginate_1.default);
