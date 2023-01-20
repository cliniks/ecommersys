"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.CategorySchema = new mongoose_1.Schema({
    name: String,
    description: String,
    hierarchy: String,
    isGlobal: Boolean,
    owner: String,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.CategorySchema.plugin(mongoose_paginate_1.default);
