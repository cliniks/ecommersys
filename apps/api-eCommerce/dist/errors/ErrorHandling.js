"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandling = void 0;
const defaultErrors_1 = require("./defaultErrors");
const enumErrors_1 = require("./enumErrors");
const ErrorHandling = ({ code, message, res }) => {
    return res.status(400).json({
        code: code,
        message: !message ? Response(code) : message,
    });
};
exports.ErrorHandling = ErrorHandling;
const Response = (code) => {
    let response = { message: "" };
    if (!code) {
        response.message = defaultErrors_1.defaultErrors.default;
        return response;
    }
    response.message = enumErrors_1.EnumErrorHandling[code] || defaultErrors_1.defaultErrors.default;
    return response;
};
