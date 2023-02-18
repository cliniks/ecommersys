"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the user can do. */
exports.userMutations = {
    /* soliciteSeller. */
    sellerSolicitation: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/sellerSolicitate`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível solicitar");
        return (0, Either_1.throwSuccess)(update.data);
    },
    verifySolicitation: async (id) => {
        const update = await axiosInstances_1.apiEcommerce.get(`/sellerSolicitate`, {
            params: {
                key: "owner",
                value: id,
            },
        });
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível solicitar");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Creating a new user. */
    createNewUser: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível criar o usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    seeProduct: async (productId) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/seeProduct/${productId}`);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível criar o usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Sending an email to the user with a token. */
    sendEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/createEmailToken`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível enviar o e-mail");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Confirm an email code to complete authentication. */
    confirmEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/confirmEmailToken`, data);
        if (!update.data)
            return (0, Either_1.throwError)("não foi possível validar o código");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Getting the user from the database. */
    getMyUser: async () => {
        const request = await axiosInstances_1.apiEcommerce.get("/users/getMyUser");
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar este Usuário");
        return (0, Either_1.throwSuccess)(request.data);
    },
    /* Updating the user info. */
    updateUserInfo: async ({ id, data, }) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/users/info/${id}`, data);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível atualizar este Usuário");
        return (0, Either_1.throwSuccess)(update.data);
    },
    /* Updating the user image. */
    updateUserImage: async ({ id, img, }) => {
        const formdata = new FormData();
        formdata.append("img", img);
        const update = await axiosInstances_1.apiEcommerce.patch(`/users/image/${id}`, formdata);
        if (!update.data)
            return (0, Either_1.throwError)("Não foi possível atualizar usuário");
        return (0, Either_1.throwSuccess)(update.data);
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
        const request = await axiosInstances_1.apiEcommerce.get("/address/myUserAddress", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar produtos desse Seller");
        return (0, Either_1.throwSuccess)(request.data);
    },
    addAddress: async (data) => {
        const request = await axiosInstances_1.apiEcommerce.post("/address/user", data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar endereço");
        return (0, Either_1.throwSuccess)(request.data);
    },
    setDefaultAddress: async (addressId) => {
        const request = await axiosInstances_1.apiEcommerce.post(`/address/setDefault/${addressId}`);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar endereço");
        return (0, Either_1.throwSuccess)(request.data);
    },
    updateAddress: async ({ addressId, data, }) => {
        const request = await axiosInstances_1.apiEcommerce.post(`/address/${addressId}`, data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar endereço");
        return (0, Either_1.throwSuccess)(request.data);
    },
    deleteAddress: async ({ addressId }) => {
        const request = await axiosInstances_1.apiEcommerce.delete(`/address/${addressId}`);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível deletar endereço");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getMyDocuments: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/documents/myDocuments", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getAllDocuments: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/documents/all", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
    getSingleDocument: async (props) => {
        const request = await axiosInstances_1.apiEcommerce.get("/documents", {
            params: props,
        });
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
    addDocument: async (data) => {
        const request = await axiosInstances_1.apiEcommerce.post("/documents", data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível adicionar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
    updateDocument: async ({ documentId, data, }) => {
        const request = await axiosInstances_1.apiEcommerce.patch(`/documents/${documentId}`, data);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível encontrar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
    deleteDocument: async ({ documentId }) => {
        const request = await axiosInstances_1.apiEcommerce.delete(`/documents/${documentId}`);
        if (!request.data)
            return (0, Either_1.throwError)("Não foi possível deletar documento");
        return (0, Either_1.throwSuccess)(request.data);
    },
};
