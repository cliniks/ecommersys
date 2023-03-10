"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AddressSchema = new mongoose_1.Schema({
    owner: String,
    address: String,
    number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
