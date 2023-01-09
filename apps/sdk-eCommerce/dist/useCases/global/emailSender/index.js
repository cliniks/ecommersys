"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalEmailSender = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
class GlobalEmailSender {
    async sendEmailToken(data) {
        return await (0, utils_1.Try)(services_1.authMutations, data);
    }
    async confirmEmailToken(data) {
        return await (0, utils_1.Try)(services_1.authMutations, data);
    }
}
exports.GlobalEmailSender = GlobalEmailSender;
