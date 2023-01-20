"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwSuccess = exports.throwError = exports.isSuccess = exports.isError = exports.unwrapEither = void 0;
const unwrapEither = ({ isError, isSuccess, }) => {
    if (isSuccess !== undefined && isError !== undefined) {
        throw new Error(`Received both isError and isSuccess values at runtime when opening an Either\nisError: ${JSON.stringify(isError)}\nisSuccess: ${JSON.stringify(isSuccess)}`);
    }
    if (isError !== undefined) {
        return isError;
    }
    if (isSuccess !== undefined) {
        return isSuccess;
    }
    throw new Error(`Received no isError or isSuccess values at runtime when opening Either`);
};
exports.unwrapEither = unwrapEither;
const isError = (e) => {
    return e.isError !== undefined;
};
exports.isError = isError;
const isSuccess = (e) => {
    return e.isSuccess !== undefined;
};
exports.isSuccess = isSuccess;
const throwError = (value) => ({
    isError: value,
});
exports.throwError = throwError;
const throwSuccess = (value) => ({
    isSuccess: value,
});
exports.throwSuccess = throwSuccess;
