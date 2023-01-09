"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandling = void 0;
const ErrorHandling = (message, code) => {
    if (typeof message === "object")
        return {
            code: 500,
            message,
        };
    return {
        code: code ? code : message ? 400 : 500,
        message: message || "Erro interno do servidor",
    };
};
exports.ErrorHandling = ErrorHandling;
