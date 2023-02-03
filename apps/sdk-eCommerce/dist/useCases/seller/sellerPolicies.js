"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerPolicy = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class sellerPolicy {
    async getSingle(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getOnePolicy, props);
    }
    async getMyPolicies(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyPolicies, props);
    }
    async create(data) {
        return await (0, utils_1.Try)(services_1.sellerMutations.addPolicy, data);
    }
    async update(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updatePolicy, props);
    }
    async delete(data) {
        return await (0, utils_1.Try)(services_1.sellerMutations.deletePolicy, data);
    }
}
exports.sellerPolicy = sellerPolicy;
