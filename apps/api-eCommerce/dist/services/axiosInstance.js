"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.AsassAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const Api = axios_1.default.create({
    baseURL: "http://localhost:3001",
});
exports.Api = Api;
Api.interceptors.request.use((config) => {
    const token = process.env.ASASS_TOKEN;
    if (config.headers === undefined)
        config.headers = {};
    if (token) {
        config.headers = {
            Accept: "application/json",
            access_token: token.trim(),
        };
        return config;
    }
    return config;
});
const AsassAPI = axios_1.default.create({
    baseURL: process.env.ASASS_HOST,
});
exports.AsassAPI = AsassAPI;
AsassAPI.interceptors.request.use((config) => {
    const token = process.env.ASASS_TOKEN;
    if (config.headers === undefined)
        config.headers = {};
    if (token) {
        config.headers = {
            Accept: "application/json",
            access_token: token.trim(),
        };
        return config;
    }
    return config;
});
