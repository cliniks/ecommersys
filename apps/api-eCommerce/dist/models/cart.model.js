"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.CartSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const CartSchema = new Schema({
    name: { type: String, required: true, unique: true },
    melhorEnvioID: String,
    asaasApiKey: String,
    products: [],
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.CartSchema = CartSchema;
CartSchema.plugin(mongoose_paginate_1.default);
const CartModel = mongoose_1.default.model("cart", CartSchema);
exports.CartModel = CartModel;
