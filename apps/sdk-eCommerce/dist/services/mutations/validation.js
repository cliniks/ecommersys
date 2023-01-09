"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMutations = void 0;
const axiosInstances_1 = require("../axiosInstances");
const Either_1 = require("../../Errors/Either");
exports.validateMutations = {
    confirmAppToken: async (appToken) => {
        const confirmation = await axiosInstances_1.apiEcommerce.post("/validateAppToken", {
            appToken,
        });
        if (confirmation.data)
            return (0, Either_1.throwSuccess)(confirmation.data);
        return (0, Either_1.throwError)("Não foi possível validar");
    },
    verifyUserToken: async () => {
        const verify = await axiosInstances_1.apiEcommerce.get("/users/verifyUser");
        if (verify.data)
            return (0, Either_1.throwSuccess)(verify.data);
        return (0, Either_1.throwError)("Não foi possível validar");
    },
};
