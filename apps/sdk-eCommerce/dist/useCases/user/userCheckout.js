"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCheckout = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userCheckout {
    async getSingle(props) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.getSingle, props);
    }
    async generate(orderId) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.generate, orderId);
    }
    async createPayment(data) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.createPayment, data);
    }
    async updatePayment(data) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.updatePayment, data);
    }
    async confirmPayment(checkoutId) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.confirmPayment, checkoutId);
    }
    async cancelOpen(checkoutId) {
        return await (0, utils_1.Try)(services_1.checkoutMutations.cancelOpen, checkoutId);
    }
}
exports.userCheckout = userCheckout;
