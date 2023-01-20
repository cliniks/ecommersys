"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the user can do. */
exports.userMutations = {
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
};
