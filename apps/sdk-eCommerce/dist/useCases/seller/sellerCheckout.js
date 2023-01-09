"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerCheckout = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class sellerCheckout {
    async getSingle(checkoutId) {
        return await (0, utils_1.Try)(services_1.sellerMutations, checkoutId);
    }
    async generate(orderId) {
        return await (0, utils_1.Try)(services_1.sellerMutations, orderId);
    }
    async createPayment(data) {
        return await (0, utils_1.Try)(services_1.sellerMutations, data);
    }
    async updatePayment(data) {
        return await (0, utils_1.Try)(services_1.sellerMutations, data);
    }
    async confirmPayment(checkoutId) {
        return await (0, utils_1.Try)(services_1.sellerMutations, checkoutId);
    }
    async cancelOpen(checkoutId) {
        return await (0, utils_1.Try)(services_1.sellerMutations, checkoutId);
    }
}
exports.sellerCheckout = sellerCheckout;
