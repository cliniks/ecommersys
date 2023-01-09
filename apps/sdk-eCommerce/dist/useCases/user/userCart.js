"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCart = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userCart {
    async getMyCart(props) {
        return await (0, utils_1.Try)(services_1.cartMutations.getMyCart, props);
    }
    async insertProduct({ productId, amount, }) {
        return await (0, utils_1.Try)(services_1.cartMutations.insertProduct, { productId, amount });
    }
    async removeProduct({ productId, amount, }) {
        return await (0, utils_1.Try)(services_1.cartMutations.removeProduct, { productId, amount });
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
