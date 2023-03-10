"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DocumentsSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    links: {
        front: String,
        back: String,
    },
    type: String,
    owner: String,
    obs: String,
    valid: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
