"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerProduct = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class sellerProduct {
    async getMyProducts(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyProducts, props);
    }
    async create(formData) {
        return await (0, utils_1.Try)(services_1.productMutations.add, formData);
    }
    async update(data) {
        return await (0, utils_1.Try)(services_1.productMutations.update, data);
    }
}
exports.sellerProduct = sellerProduct;
