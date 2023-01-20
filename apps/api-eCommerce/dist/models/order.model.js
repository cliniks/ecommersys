"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const OrderSchema = new Schema({
    name: { type: String, required: true, unique: true },
    melhorEnvioID: String,
    asaasApiKey: String,
    products: [],
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.OrderSchema = OrderSchema;
OrderSchema.plugin(mongoose_paginate_1.default);
const OrderModel = mongoose_1.default.model("order", OrderSchema);
exports.OrderModel = OrderModel;
