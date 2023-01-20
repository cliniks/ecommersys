"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletHistorySchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.WalletHistorySchema = new mongoose_1.Schema({
    owner: {
        type: String,
        require: true,
    },
    isActive: { type: Boolean, default: true },
    description: String,
    in: Number,
    out: Number,
    orderId: String,
    transactionId: String,
    operator: String,
}, {
    timestamps: true,
});
exports.WalletHistorySchema.plugin(mongoose_paginate_1.default);
