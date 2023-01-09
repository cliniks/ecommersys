"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Try = void 0;
const Either_1 = require("../Errors/Either");
const ErrorHandling_1 = require("../Errors/ErrorHandling");
const Try = async (fn, ...args) => {
    var _a;
    try {
        const resolver = await fn.apply(null, args);
        if ((0, Either_1.isSuccess)(resolver))
            (0, Either_1.unwrapEither)(resolver);
        return resolver;
    }
    catch (err) {
        const axiosError = { isError: (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data };
        return (0, ErrorHandling_1.ErrorHandling)(axiosError);
    }
};
exports.Try = Try;
