"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerCoupon = void 0;
const services_1 = require("../../services");
const coupon_1 = require("../../services/mutations/coupon");
const utils_1 = require("../../utils");
class sellerCoupon {
    async getSingle(key, value) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.getSingle, key, value);
    }
    async getMyCoupons(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyCoupons, props);
    }
    async create(data) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.createCoupon, data);
    }
    async update(couponId, data) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.updateCoupon, couponId, data);
    }
    async utilize(couponId) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.utilizeCoupon, couponId);
    }
    async cancel(couponId) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.cancelCoupon, couponId);
    }
}
exports.sellerCoupon = sellerCoupon;
