"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the user can do. */
exports.sellerMutations = {
    /* Sending an email to the user with a token. */
    sendEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/sellers/createEmailToken`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível enviar o e-mail");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Confirm an email code to complete authentication. */
    confirmEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/sellers/confirmEmailToken`, data);
        if (!update.data)
            return (0, Either_1.throwError)("não foi possível validar o código");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Getting the seller from the database. */
    getMyStore: async () => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/getMyStore");
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar este Usuário");
        return (0, Either_1.throwSuccess)(request.data);
    },
    /* Getting the user from the database. */
    getOneStore: async ({ key, value, }) => {
        const request = await axiosInstances_1.apiEcommerce.get(`/sellers`, {
            params: { key, value },
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar este Usuário");
        return (0, Either_1.throwSuccess)(request.data);
    },
    /* Getting the user from the database. */
    getAllStore: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get(`/sellers/all`, { params: props });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar este Usuário");
        return (0, Either_1.throwSuccess)(request.data);
    },
    /* Updating the user info. */
    updateSellerInfo: async ({ id, data, }) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/sellers/info/${id}`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível atualizar este Usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Updating the user image. */
    updateStoreImage: async (formData) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/sellers/updateStoreImage`, formData);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível atualizar usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Updating the user image. */
    updateStoreBanner: async (formData) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/sellers/updateStoreBanner`, formData);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível atualizar usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    getMyProducts: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/getMyProducts", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar produtos desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getMyCategories: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/getMyCategories", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar produtos desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getMyCoupons: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/getMyCoupons", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar produtos desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getOneAddress: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/address/", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getMyAddress: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/address/myStoreAddress", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar produtos desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    addAddress: async (data) => {
        const request = await axiosInstances_1.apiEcommerce.post("/address/seller", data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    updateAddress: async ({ addressId, data, }) => {
        const request = await axiosInstances_1.apiEcommerce.post(`/address/${addressId}`, data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    deleteAddress: async ({ addressId }) => {
        const request = await axiosInstances_1.apiEcommerce.delete(`/address/${addressId}`);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível deletar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getOnePolicy: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/policies", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getMyPolicies: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/sellers/policies/myPolicies", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    addPolicy: async (data) => {
        const request = await axiosInstances_1.apiEcommerce.post("/sellers/policies", data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    updatePolicy: async ({ policyId, data, }) => {
        const request = await axiosInstances_1.apiEcommerce.patch(`/sellers/policies/${policyId}`, data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    deletePolicy: async ({ policyId, }) => {
        const request = await axiosInstances_1.apiEcommerce.delete(`/sellers/policies/${policyId}`);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível deletar policy desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
};
