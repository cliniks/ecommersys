"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProduct = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userProduct {
    async seeProduct(productId) {
        return await (0, utils_1.Try)(services_1.userMutations.seeProduct, productId);
    }
}
exports.userProduct = userProduct;
