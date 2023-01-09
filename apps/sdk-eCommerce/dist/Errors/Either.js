"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwSuccess = exports.throwError = exports.isSuccess = exports.isError = exports.unwrapEither = void 0;
const unwrapEither = ({ isError, isSuccess, }) => {
    if (isSuccess !== undefined && isError !== undefined) {
        throw new Error(`Received both isError and isSuccess values at runtime when opening an Either\nisError: ${JSON.stringify(isError)}\nisSuccess: ${JSON.stringify(isSuccess)}`);
        /*
         We're throwing in this function because this can only occur at runtime if something
         happens that the TypeScript compiler couldn't anticipate. That means the application
         is in an unexpected state and we should terminate immediately.
        */
    }
    if (isError !== undefined) {
        return isError; // Typescript is getting confused and returning this type as `T | undefined` unless we add the type assertion
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
