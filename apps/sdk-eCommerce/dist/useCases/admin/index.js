"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class Admin {
    async getAllSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.getAllSellersSolicitation, props);
    }
    async getSingleSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.getSingleSellersSolicitation, props);
    }
    async confirmSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.getAllSellersSolicitation, props);
    }
}
exports.default = new Admin();
