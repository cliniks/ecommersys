"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commissions = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
const GlobalCommission = {
    getSingle: async ({ key, value, }) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getAll: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/all`, {
            params: props,
        });
        if (!response)
            return (0, Errors_1.throwError)("Não foi possível encontrar comissões");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    update: async ({ commissionId, data, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/admin/commission/${commissionId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar comissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
const StoreCommission = {
    getSingle: async ({ key, value, }) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/store`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getAll: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/store/all`, {
            params: props,
        });
        if (!response)
            return (0, Errors_1.throwError)("Não foi possível encontrar comissões");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    add: async (data) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/admin/commission/store`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar a commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    update: async ({ commissionId, data, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/admin/commission/store/${commissionId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar comissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
const CategoryCommission = {
    getSingle: async ({ key, value, }) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/category`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getByStore: async (storeId) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/category/${storeId}`);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    add: async (data) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/admin/commission/category`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar a commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getAll: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/category/all`, {
            params: props,
        });
        if (!response)
            return (0, Errors_1.throwError)("Não foi possível encontrar comissões");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    update: async ({ commissionId, data, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/admin/commission/category/${commissionId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar comissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
const ProductCommission = {
    getSingle: async ({ key, value, }) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/product`, {
            params: { key, value },
        });
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getByStore: async (storeId) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/product/${storeId}`);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível achar o commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    add: async (data) => {
        const response = await axiosInstances_1.apiEcommerce.post(`/admin/commission/product`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível criar a commissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    getAll: async (props) => {
        const response = await axiosInstances_1.apiEcommerce.get(`/admin/commission/product/all`, {
            params: props,
        });
        if (!response)
            return (0, Errors_1.throwError)("Não foi possível encontrar comissões");
        return (0, Errors_1.throwSuccess)(response.data);
    },
    update: async ({ commissionId, data, }) => {
        const response = await axiosInstances_1.apiEcommerce.patch(`/admin/commission/product/${commissionId}`, data);
        if (!response.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar comissão");
        return (0, Errors_1.throwSuccess)(response.data);
    },
};
exports.commissions = {
    GlobalCommission,
    StoreCommission,
    CategoryCommission,
    ProductCommission,
};
