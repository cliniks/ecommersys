"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMutations = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
exports.uploadMutations = {
    sendEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/createEmailToken`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível enviar o e-mail");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    confirmEmailToken: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.post(`/users/confirmEmailToken`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("não foi possível validar o código");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    uploadImage: async (data) => {
        const upload = await axiosInstances_1.apiEcommerce.post("/globals/addImage", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        if (!upload)
            return (0, Errors_1.throwError)("Não foi possível efetuar o upload a imagem");
        return (0, Errors_1.throwSuccess)(upload.data);
    },
};
