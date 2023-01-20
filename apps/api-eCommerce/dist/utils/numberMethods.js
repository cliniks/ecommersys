"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIsNumber = void 0;
const verifyIsNumber = (toVerify) => {
    return (typeof toVerify !== "object" &&
        typeof toVerify !== "boolean" &&
        !isNaN(toVerify));
};
exports.verifyIsNumber = verifyIsNumber;
