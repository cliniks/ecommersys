"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCouponApply = exports.filterBestCoupon = exports.prepareResponse = exports.applyDiscount = exports.verifyIncludesSlash = exports.applyCouponDiscount = void 0;
const applyCouponDiscount = (coupon, store, product, amount) => {
    const assigned = {
        categories: null,
        products: null,
        stores: null,
    };
    const discountType = coupon.type;
    product.categories.forEach((item) => {
        if (coupon.categoriesAssigned.includes(item)) {
            const response = (0, exports.prepareResponse)(discountType, product, coupon, amount);
            assigned.categories = response;
        }
    });
    coupon.productsAssigned.forEach((item) => {
        if ((0, exports.verifyIncludesSlash)(item, 0) === product._id.toString()) {
            const response = (0, exports.prepareResponse)(discountType, product, coupon, amount);
            assigned.products = response;
        }
    });
    coupon.storesAssigned.forEach((item) => {
        if ((0, exports.verifyIncludesSlash)(item, 0) === store._id.toString()) {
            const response = (0, exports.prepareResponse)(discountType, product, coupon, amount);
            assigned.stores = response;
        }
    });
    return assigned;
};
exports.applyCouponDiscount = applyCouponDiscount;
const verifyIncludesSlash = (str, item) => {
    if (str.includes("/"))
        return str.split("/")[item];
    if (str)
        return str;
    return null;
};
exports.verifyIncludesSlash = verifyIncludesSlash;
const applyDiscount = (discountType, productValue, discountValue) => {
    const discount = addDot(discountType === "fixed"
        ? discountValue
        : (+productValue / 100) * +discountValue);
    const discountApplied = addDot(+productValue - +discount);
    return { discountApplied, discount };
};
exports.applyDiscount = applyDiscount;
const prepareResponse = (discountType, product, coupon, amount) => {
    const discount = (0, exports.applyDiscount)(discountType, product.price, coupon.value);
    const totalValue = addDot(+discount.discountApplied * amount);
    const response = Object.assign(Object.assign({}, discount), { totalValue, couponApplied: `${coupon._id}/${coupon.name}` });
    console.log({ response });
    return response;
};
exports.prepareResponse = prepareResponse;
const filterBestCoupon = (ApplyCoupon) => {
    var _a, _b, _c;
    if (ApplyCoupon.length > 1) {
        ApplyCoupon.sort((item1, item2) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!item1 || !item2)
                return 0;
            if (item1.categories) {
                if (+((_a = item1.categories) === null || _a === void 0 ? void 0 : _a.totalValue) < +((_b = item2.products) === null || _b === void 0 ? void 0 : _b.totalValue))
                    return -1;
                if (+((_c = item1.categories) === null || _c === void 0 ? void 0 : _c.totalValue) < +((_d = item2.stores) === null || _d === void 0 ? void 0 : _d.totalValue))
                    return -1;
                if (+((_e = item1.products) === null || _e === void 0 ? void 0 : _e.totalValue) < +((_f = item2.categories) === null || _f === void 0 ? void 0 : _f.totalValue))
                    return -1;
            }
            if (+((_g = item1.stores) === null || _g === void 0 ? void 0 : _g.totalValue) < +((_h = item2.products) === null || _h === void 0 ? void 0 : _h.totalValue))
                return -1;
            if (+((_j = item1.stores) === null || _j === void 0 ? void 0 : _j.totalValue) < +((_k = item2.products) === null || _k === void 0 ? void 0 : _k.totalValue))
                return -1;
            if (+((_l = item1.products) === null || _l === void 0 ? void 0 : _l.totalValue) < +((_m = item2.stores) === null || _m === void 0 ? void 0 : _m.totalValue))
                return -1;
            return 0;
        });
    }
    const discount = ((_a = ApplyCoupon[0]) === null || _a === void 0 ? void 0 : _a.categories) ||
        ((_b = ApplyCoupon[0]) === null || _b === void 0 ? void 0 : _b.products) ||
        ((_c = ApplyCoupon[0]) === null || _c === void 0 ? void 0 : _c.stores);
    return discount;
};
exports.filterBestCoupon = filterBestCoupon;
const verifyCouponApply = (coupons, store, product, amount) => {
    let couponApplied = [];
    // if (coupons.length > 0) {
    for (let i = 0; i < coupons.length; i++) {
        const apply = (0, exports.applyCouponDiscount)(coupons[i], store, product, amount);
        if (apply) {
            couponApplied.push(apply);
        }
    }
    return (0, exports.filterBestCoupon)(couponApplied);
    // }
};
exports.verifyCouponApply = verifyCouponApply;
const addDot = (str) => {
    let convertedStr = str.toString();
    if (convertedStr.includes("."))
        return +str;
    convertedStr =
        convertedStr.substring(0, convertedStr.length - 2) +
            "." +
            convertedStr.substring(convertedStr.length - 2);
    console.log(convertedStr);
    return +convertedStr;
};
