"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUseCases = void 0;
const auth_1 = require("./auth");
const verifyToken_1 = require("./verifyToken");
const emailToken_1 = require("./emailToken");
exports.authUseCases = {
    auth: auth_1.auth,
    verifyToken: verifyToken_1.verifyToken,
    createEmailToken: emailToken_1.createEmailToken,
    confirmEmailToken: emailToken_1.confirmEmailToken,
};
