"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodScheema = void 0;
const mongoose_1 = require("mongoose");
exports.PaymentMethodScheema = new mongoose_1.Schema({
    owner: String,
    creditCardNumber: String,
    creditCardBrand: String,
    creditCardToken: String,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
