"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerCoupon = void 0;
const services_1 = require("../../services");
const coupon_1 = require("../../services/mutations/coupon");
const utils_1 = require("../../utils");
class sellerCoupon {
    async getSingle(props) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.getSingle, props);
    }
    async getMyCoupons(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyCoupons, props);
    }
    async create(data) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.createCoupon, data);
    }
    async update(props) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.updateCoupon, props);
    }
    async utilize(props) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.utilizeCoupon, props);
    }
    async cancel(props) {
        return await (0, utils_1.Try)(coupon_1.couponMutation.cancelCoupon, props);
    }
}
exports.sellerCoupon = sellerCoupon;
