"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCommissionSchema = exports.CategoryCommissionSchema = exports.ProductCommissionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductCommissionSchema = new mongoose_1.Schema({
    storeId: String,
    productId: String,
    commissionType: {
        type: String,
        require: true,
        enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
        { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
}, {
    timestamps: true,
});
exports.CategoryCommissionSchema = new mongoose_1.Schema({
    storeId: String,
    categoryId: String,
    commissionType: {
        type: String,
        require: true,
        enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
        { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
}, {
    timestamps: true,
});
exports.StoreCommissionSchema = new mongoose_1.Schema({
    storeId: String,
    commissionType: {
        type: String,
        require: true,
        enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
        { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
}, {
    timestamps: true,
});
