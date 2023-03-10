"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUseCases = void 0;
const auth_1 = require("./auth");
const verifyToken_1 = require("./verifyToken");
const emailToken_1 = require("./emailToken");
const changePassword_1 = require("./changePassword");
exports.authUseCases = {
    auth: auth_1.auth,
    verifyToken: verifyToken_1.verifyToken,
    verifyAccountExistence: auth_1.verifyAccountExistence,
    changePassword: changePassword_1.changePassword,
    createEmailToken: emailToken_1.createEmailToken,
    confirmEmailToken: emailToken_1.confirmEmailToken,
};
