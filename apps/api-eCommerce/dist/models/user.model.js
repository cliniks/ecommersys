"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    wallet: {
        amount: { type: Number, default: 0 },
        history: [],
    },
    img: {
        type: String,
        default: process.env.INITIAL_IMAGE,
    },
    userInfo: {
        name: String,
        lastName: String,
        fone: String,
        cpf: String,
        birthdate: String,
        address: String,
        number: Number,
        complement: String,
        city: String,
        state: String,
        cep: String,
        email: String,
    },
    myOrders: [],
    buysUnderProcess: [],
    melhorEnvioID: String,
    gatewayPagId: String,
    myBuys: [],
    wishList: [],
    favorites: [],
    likes: [],
    messages: [],
    cart: [],
    storeId: String,
    storeData: {},
    access: {
        type: Number,
        default: 0,
    },
    register: {
        type: Date,
        default: Date.now,
    },
});
exports.UserSchema = UserSchema;
UserSchema.plugin(mongoose_paginate_1.default);
const UserModel = mongoose_1.default.model("user", UserSchema);
exports.UserModel = UserModel;
