"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.EvaluationSchema = new mongoose_1.Schema({
    productId: String,
    stars: Number,
    owner: String,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.EvaluationSchema.plugin(mongoose_paginate_1.default);
