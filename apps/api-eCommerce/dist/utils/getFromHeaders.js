"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bearerTokenFromHeader = void 0;
const bearerTokenFromHeader = (token) => {
    var _a;
    return (_a = token.split("Bearer ")[1]) === null || _a === void 0 ? void 0 : _a.trim();
};
exports.bearerTokenFromHeader = bearerTokenFromHeader;
