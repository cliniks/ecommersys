"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePoliciesSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.StorePoliciesSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    type: String,
    status: String,
    isActive: { type: Boolean, default: true },
    owner: { type: String, required: true },
}, {
    timestamps: true,
});
exports.StorePoliciesSchema.plugin(mongoose_paginate_1.default);
