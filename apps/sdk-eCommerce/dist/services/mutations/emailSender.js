"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSenderMutations = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
exports.emailSenderMutations = {
    /* Sending an email to the user with a token. */
    sendEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/createEmailToken`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível enviar o e-mail");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    /* Confirm an email code to complete authentication. */
    confirmEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/confirmEmailToken`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("não foi possível validar o código");
        return (0, Errors_1.throwSuccess)(update.data);
    },
};
