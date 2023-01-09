"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponMutation = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the checkout can do. */
exports.couponMutation = {
    getSingle: async (key, value) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/coupons/`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o cupom");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getMyCoupons: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/sellers/getMyCoupons`, {
            params: props,
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar as categorias");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    createCoupon: async (data) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/coupons/}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar cupom");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    updateCoupon: async (couponId, data) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/coupons/${couponId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar cupom");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    utilizeCoupon: async (couponId) => {
        const request = await axiosInstances_1.apiEcommerce.patch(`/coupons/utilize/${couponId}`);
        if (!request.data)
            return (0, Errors_1.throwError)("Não foi possível utilizar cupom");
        return (0, Errors_1.throwSuccess)(request.data);
    },
    cancelCoupon: async (couponId) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/coupons/cancel/${couponId}`);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível cancelar cupom");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
