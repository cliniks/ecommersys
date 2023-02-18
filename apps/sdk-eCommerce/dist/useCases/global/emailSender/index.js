"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalEmailSender = void 0;
const emailSender_1 = require("../../../services/mutations/emailSender");
const utils_1 = require("../../../utils");
class GlobalEmailSender {
    async sendEmailToken(data) {
        return await (0, utils_1.Try)(emailSender_1.emailSenderMutations.sendEmailToken, data);
    }
    async confirmEmailToken(data) {
        return await (0, utils_1.Try)(emailSender_1.emailSenderMutations.confirmEmailToken, data);
    }
}
exports.GlobalEmailSender = GlobalEmailSender;
