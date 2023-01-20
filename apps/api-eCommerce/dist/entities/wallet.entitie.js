"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.WalletSchema = new mongoose_1.Schema({
    owner: {
        type: String,
        require: true,
    },
    isActive: { type: Boolean, default: true },
    amount: String,
}, {
    timestamps: true,
});
exports.WalletSchema.plugin(mongoose_paginate_1.default);
