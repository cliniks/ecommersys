"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.CartSchema = new mongoose_1.Schema({
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
exports.CartSchema.plugin(mongoose_paginate_1.default);
