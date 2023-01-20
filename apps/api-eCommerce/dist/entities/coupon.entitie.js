"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.CouponSchema = new mongoose_1.Schema({
    assined: [],
    name: {
        type: String,
        require: true,
        unique: true,
    },
    description: String,
    type: String,
    value: String,
    minValue: String,
    maxValue: String,
    used: { type: Number, default: 0 },
    limitForUse: Number,
    isCashBack: { type: Boolean, default: false },
    isFreeShipping: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    startDate: { type: Date, default: new Date() },
    endDate: Date,
    owner: String,
}, {
    timestamps: true,
});
exports.CouponSchema.plugin(mongoose_paginate_1.default);
