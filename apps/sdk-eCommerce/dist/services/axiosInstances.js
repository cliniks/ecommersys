"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInterceptor = exports.apiEcommerce = void 0;
const axios_1 = __importDefault(require("axios"));
const axiosInterceptors_1 = require("../configs/axiosInterceptors");
const apiEcommerce = axios_1.default.create({
    // baseURL: "http://localhost:3010",
    baseURL: "https://api.ikiradev.com",
    headers: axiosInterceptors_1.configInterceptors,
});
exports.apiEcommerce = apiEcommerce;
const updateInterceptor = async (interceptors) => {
    return apiEcommerce.interceptors.request.use((config) => {
        if (!config.headers)
            config.headers = axiosInterceptors_1.configInterceptors;
        config.headers = Object.assign(Object.assign(Object.assign({}, axiosInterceptors_1.configInterceptors), config.headers), interceptors);
        return config;
    });
};
exports.updateInterceptor = updateInterceptor;
