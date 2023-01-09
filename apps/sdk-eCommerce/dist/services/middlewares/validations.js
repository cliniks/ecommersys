"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
const tryCatch_1 = require("../../utils/tryCatch");
const validation_1 = require("../mutations/validation");
exports.middlewares = {
    confirmAppToken: async (appToken) => await (0, tryCatch_1.Try)(validation_1.validateMutations.confirmAppToken, appToken),
    verifyUserToken: async () => await (0, tryCatch_1.Try)(validation_1.validateMutations.verifyUserToken),
};
