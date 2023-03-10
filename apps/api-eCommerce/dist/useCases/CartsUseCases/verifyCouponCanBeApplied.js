"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIfCanBeAplied = void 0;
const verifyIfCanBeAplied = async (cart, coupon, productRepo) => {
    var _a, _b;
    let cartStatistics = {
        productIds: [],
        categoryIds: [],
        storeIds: [],
    };
    let productItems = Array.from(cart.products);
    if ((productItems === null || productItems === void 0 ? void 0 : productItems.length) > 0) {
        for (let i = 0; i < productItems.length; i++) {
            let getProduct = await productRepo.getOne({
                key: "_id",
                value: `${productItems[i].productId}`,
            });
            const categories = ((_b = (_a = getProduct.categories) === null || _a === void 0 ? void 0 : _a.filter((item) => item && item !== "undefined")) === null || _b === void 0 ? void 0 : _b.map((item) => item.split("/")[0])) || [];
            cartStatistics.productIds.push(getProduct._id);
            cartStatistics.categoryIds.push(...categories);
            cartStatistics.storeIds.push(getProduct.owner);
            productItems[i] = Object.assign(Object.assign({}, productItems[i]), getProduct._doc);
        }
    }
    const assigned = {
        categories: cartStatistics.categoryIds.filter((item) => coupon.categoriesAssigned.includes(item)),
        products: cartStatistics.productIds.filter((item) => coupon.productsAssigned.includes(item)),
        stores: cartStatistics.storeIds.filter((item) => coupon.storesAssigned.includes(item)),
    };
    const isPossible = assigned.categories.length > 0 ||
        assigned.products.length > 0 ||
        assigned.stores.length > 0 ||
        (assigned.categories.length === 0 &&
            assigned.products.length === 0 &&
            assigned.stores.length === 0);
    return {
        cartStatistics,
        productItems,
        isPossible,
    };
};
exports.verifyIfCanBeAplied = verifyIfCanBeAplied;
