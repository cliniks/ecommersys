"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesSchema = exports.paymentStatus = void 0;
const mongoose_1 = require("mongoose");
exports.paymentStatus = [
    "PENDING",
    "RECEIVED",
    "CONFIRMED",
    "OVERDUE",
    "REFUNDED",
    "REFUND_REQUESTED",
    "CHARGEBACK_REQUESTED",
    "CHARGEBACK_DISPUTE",
    "AWAITING_CHARGEBACK_REVERSAL",
    "DUNNING_REQUESTED",
    "AWAIT_RISK_ANALYSIS",
];
exports.SalesSchema = new mongoose_1.Schema({
    sellers: [
        {
            storeId: String,
            coupons: [String],
            walletId: String,
            products: [
                {
                    imgs: [String],
                    name: String,
                    owner: String,
                    price: String,
                    regularPrice: String,
                    shippingInfo: {
                        height: String,
                        width: String,
                        weight: String,
                        length: String,
                    },
                    stockInfo: {
                        qnt: Number,
                        sku: String,
                        SoldIndividually: Boolean,
                    },
                    _id: String,
                    virtualProduct: Boolean,
                    categories: [String],
                },
            ],
        },
    ],
    userId: String,
    addressId: String,
    payment: {
        amount: Number,
        paymentMethod: String,
        cardToken: String,
        id: String,
    },
    coupons: [String],
    totalValue: Number,
    totalDiscount: Number,
    totalItems: Number,
    billingType: {
        type: String,
        enum: [
            "BOLETO",
            "CREDIT_CARD",
            "UNDEFINED",
            "TRANSFER",
            "DEPOSIT",
            "PIX",
        ],
    },
    storeIds: [String],
    paymentStatus: { type: String, enum: exports.paymentStatus },
    paymentId: String,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
