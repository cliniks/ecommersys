"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCart = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userCart {
    async getMyCart() {
        return await (0, utils_1.Try)(services_1.cartMutations.getMyCart);
    }
    async insertProduct(props) {
        return await (0, utils_1.Try)(services_1.cartMutations.insertProduct, props);
    }
    async removeProduct(props) {
        return await (0, utils_1.Try)(services_1.cartMutations.removeProduct, props);
    }
    async insertCoupon(CouponId) {
        return await (0, utils_1.Try)(services_1.cartMutations.insertCoupon, CouponId);
    }
    async removeCoupon(CouponId) {
        return await (0, utils_1.Try)(services_1.cartMutations.getMyCart, CouponId);
    }
    async insertAddress(AddressId) {
        return await (0, utils_1.Try)(services_1.cartMutations.insertAddress, AddressId);
    }
    async removeAddress(AddressId) {
        return await (0, utils_1.Try)(services_1.cartMutations.removeAddress, AddressId);
    }
    async clearMyCart() {
        return await (0, utils_1.Try)(services_1.cartMutations.clearMyCart);
    }
}
exports.userCart = userCart;
