"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalProducts = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
class GlobalProducts {
    async getSingle(key, value) {
        return await (0, utils_1.Try)(services_1.productMutations.getProductSingle, key, value);
    }
    async getAll(props) {
        return await (0, utils_1.Try)(services_1.productMutations.getProducts, props);
    }
}
exports.GlobalProducts = GlobalProducts;
