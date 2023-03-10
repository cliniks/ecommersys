"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSchema = void 0;
const mongoose_1 = require("mongoose");
exports.LeadSchema = new mongoose_1.Schema({
    email: String,
    name: String,
    phone: String,
}, { timestamps: true });
