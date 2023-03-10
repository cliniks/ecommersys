"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
exports.Checkout = new mongoose_1.Schema({
    owner: String,
    coupons: [String],
    address: {
        district: String,
        address: String,
        number: String,
        complement: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
    },
    store: [
        {
            storeId: String,
            products: [
                {
                    productId: String,
                    qnt: Number,
                    value: String,
                    discount: String,
                },
            ],
            meValuePreview: String,
            value: String,
            discount: String,
        },
    ],
    totalValue: String,
    totalDiscount: String,
    paymentMethods: [
        { paymentType: String, paymentMethodId: String, value: String },
    ],
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.Checkout.plugin(mongoose_paginate_1.default);
