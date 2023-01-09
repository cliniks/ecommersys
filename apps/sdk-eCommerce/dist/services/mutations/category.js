"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryMutation = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the checkout can do. */
exports.categoryMutation = {
    getSingle: async (key, value) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/categories/`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o category");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getMyCategories: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/sellers/getMyCategories`, {
            params: props,
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o category");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    create: async (data) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/categories/}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar category");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    update: async (categoryId, data) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/categories/${categoryId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar category");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    cancel: async (categoryId) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/categories/cancel/${categoryId}`);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível cancelar category");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
