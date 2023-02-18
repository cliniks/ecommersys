"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPayments = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userPayments {
    async myUserCards() {
        return await (0, utils_1.Try)(services_1.paymentMethodsMutations.myUserCards);
    }
    async mySellerCards() {
        return await (0, utils_1.Try)(services_1.paymentMethodsMutations.mySellerCards);
    }
    async addPaymentMethod(data) {
        return await (0, utils_1.Try)(services_1.paymentMethodsMutations.addPaymentTokenCard, data);
    }
    async deletePaymentMethod(id) {
        return await (0, utils_1.Try)(services_1.paymentMethodsMutations.deletePaymentMethods, id);
    }
}
exports.userPayments = userPayments;
