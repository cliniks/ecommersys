"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the user can do. */
exports.sellerMutations = {
    /* Creating a new user. */
    solicitation: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/sellers`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível criar o usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
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
        const request = await axiosInstances_1.apiEcommerce.get(`/sellers`, { params: props });
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
};
