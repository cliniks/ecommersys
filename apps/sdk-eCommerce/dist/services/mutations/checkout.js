"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutMutations = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the checkout can do. */
exports.checkoutMutations = {
    getSingle: async ({ key, value, }) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/checkouts/`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o checkout");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    generate: async ({ orderId, }) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/checkouts/generate`, {
            orderId,
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível gerar um novo checkout");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    createPayment: async ({ type, value, checkoutId, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/checkouts/createPayment/${checkoutId}`, { type, value });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar pagamento");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    updatePayment: async ({ type, value, checkoutId, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/checkouts/updatePayment/${checkoutId}`, { type, value });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar pagamento");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    confirmPayment: async ({ checkoutId, }) => {
        const request = await axiosInstances_1.apiEcommerce.get(`/checkouts/confirmPayment/${checkoutId}`);
        if (!request.data)
            return (0, Errors_1.throwError)("Não foi possível confirmar pagamento");
        return (0, Errors_1.throwSuccess)(request.data);
    },
    cancelOpen: async ({ checkoutId, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/checkouts/cancel/${checkoutId}`, { checkoutId });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível cancelar checkout");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
