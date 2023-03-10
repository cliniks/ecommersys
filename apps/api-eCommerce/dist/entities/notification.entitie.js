"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.NotificationSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    message: String,
    direction: {
        type: String,
        enum: ["allStores", "allClients", "client", "store", "all"],
    },
    directionId: [String],
    path: String,
    startDate: Date,
    endDate: Date,
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
