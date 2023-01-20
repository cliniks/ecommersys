"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    value: {
        type: String,
        required: true,
        default: "0",
    },
    img: {
        type: Array,
        default: [process.env.INITIAL_PRODUCT_IMG],
    },
    partners: [String],
    qnt: {
        type: Number,
        default: 0,
    },
    sizes: [{ qnt: Number, sizeType: String }],
    height: String,
    width: String,
    weight: String,
    owner: {
        type: String,
        required: true,
    },
    ownerData: {},
    likes: {
        type: Number,
        default: 0,
    },
    likers: [],
    favorites: [],
    discount: {
        active: { type: Boolean, default: false },
        percentage: { type: Number, default: 0 },
    },
    status: {
        type: Boolean,
        default: 0,
    },
    group: [],
    subgroup: [],
    statistics: {
        views: { type: Number, default: 0 },
        buyeds: { type: Number, default: 0 },
    },
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.ProductSchema = ProductSchema;
ProductSchema.plugin(mongoose_paginate_1.default);
