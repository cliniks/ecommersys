"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
const axiosInstances_1 = require("../../services/axiosInstances");
const validations_1 = require("../../services/middlewares/validations");
const tryCatch_1 = require("../../utils/tryCatch");
class SDK {
    constructor(appToken) {
        this.connected = false;
        if (appToken)
            this.connect({ appToken });
    }
    async connect({ appToken, }) {
        const confirmAppToken = await (0, tryCatch_1.Try)(validations_1.middlewares.confirmAppToken, `${appToken}`);
        if (confirmAppToken.isSuccess) {
            this.connected = true;
            await (0, axiosInstances_1.updateInterceptor)({ ["Authorization"]: `Bearer ${appToken}` });
        }
        else {
            this.connected = false;
        }
        return confirmAppToken;
    }
    async userToken(appToken) {
        await (0, axiosInstances_1.updateInterceptor)({ ["x-access-token"]: appToken });
        return true;
    }
}
exports.SDK = SDK;
