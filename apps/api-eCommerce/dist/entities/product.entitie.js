"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: String,
    regularPrice: String,
    virtualProduct: Boolean,
    imgs: [String],
    partners: [String],
    isActive: { type: Boolean, default: true },
    shippingInfo: {
        height: String,
        width: String,
        length: String,
        weight: String,
    },
    owner: String,
    discount: [
        {
            key: [String],
            type: String,
            active: Boolean,
            percentage: Number,
        },
    ],
    status: Boolean,
    categories: [String],
    statistics: {
        likes: Number,
        likers: [String],
        views: Number,
        favorite: Number,
        favorites: [String],
        buys: Number,
    },
    stockInfo: {
        qnt: Number,
        sku: String,
        SoldIndividually: Boolean,
    },
    tags: [String],
    hangTags: [String],
}, {
    timestamps: true,
});
exports.ProductSchema.plugin(mongoose_paginate_1.default);
