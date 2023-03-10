"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCommissionSchema = exports.DocumentsAdminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DocumentsAdminSchema = new mongoose_1.Schema({
    documentTypes: [String],
}, {
    timestamps: true,
});
exports.GlobalCommissionSchema = new mongoose_1.Schema({
    commissionType: {
        type: String,
        enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
        {
            minValue: Number,
            maxValue: Number,
            percentage: Number,
            fixed: Number,
        },
    ],
}, {
    timestamps: true,
});
