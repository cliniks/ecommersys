"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalSellers = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
class GlobalSellers {
    async getSingle(key, value) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getOneStore, key, value);
    }
    async getAll(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getAllStore, props);
    }
}
exports.GlobalSellers = GlobalSellers;
