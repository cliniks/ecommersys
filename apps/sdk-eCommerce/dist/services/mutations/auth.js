"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
exports.authMutations = {
    auth: async ({ username, password, }) => {
        if (!username)
            return (0, Either_1.throwError)("Campo username não pode estar vazio");
        if (!password)
            return (0, Either_1.throwError)("Campo senha não pode estar vazio");
        const verify = await axiosInstances_1.apiEcommerce.post("/auth", { username, password });
        if (!verify)
            return (0, Either_1.throwError)("Não foi possível autenticar");
        (0, axiosInstances_1.updateInterceptor)({ ["x-access-token"]: verify.data.accessToken });
        return (0, Either_1.throwSuccess)(verify.data);
    },
    verifyToken: async (token) => {
        const verify = await axiosInstances_1.apiEcommerce.post("auth/verifyToken", { token });
        if (!verify)
            return (0, Either_1.throwError)("Não foi possível autenticar");
        return (0, Either_1.throwSuccess)(verify.data);
    },
};
