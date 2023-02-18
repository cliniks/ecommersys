"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodsMutations = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
exports.paymentMethodsMutations = {
    myUserCards: async () => {
        const get = await axiosInstances_1.apiEcommerce.get(`/payments/myUserCards`);
        if (!get.data)
            return (0, Errors_1.throwError)("Não foi possível encontrar método de pagamento");
        return (0, Errors_1.throwSuccess)(get.data);
    },
    mySellerCards: async () => {
        const get = await axiosInstances_1.apiEcommerce.get(`/payments/mySellerCards`);
        if (!get.data)
            return (0, Errors_1.throwError)("Não foi possível encontrar método de pagamento");
        return (0, Errors_1.throwSuccess)(get.data);
    },
    updatePaymentMethods: async (id, data) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/payments/${id}`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar método de pagamento");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    deletePaymentMethods: async (id) => {
        const update = await axiosInstances_1.apiEcommerce.delete(`/payments/${id}`);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar método de pagamento");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    addPaymentTokenCard: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/payments`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar método de pagamento");
        return (0, Errors_1.throwSuccess)(update.data);
    },
};
/payments/;
