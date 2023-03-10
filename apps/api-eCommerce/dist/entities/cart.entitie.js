"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CartSchema = new mongoose_1.Schema({
    owner: String,
    products: [],
    coupons: [String],
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
