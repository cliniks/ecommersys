"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyCart = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const getCartProducts_1 = require("./getCartProducts");
const getMyCart = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let findMyCart = await repo.getOne({
            key: "owner",
            value: `${user._id}`,
        });
        if (!findMyCart) {
            const create = await repo.addOne({ owner: `${user._id}` });
            findMyCart = create;
        }
        let cart = findMyCart._doc;
        let productItems = (cart === null || cart === void 0 ? void 0 : cart.products) || [];
        let couponItems = (cart === null || cart === void 0 ? void 0 : cart.coupons) || [];
        const getMYCartProducts = await (0, getCartProducts_1.getCartProducts)(productItems, couponItems);
        let totalValues = { totalPrice: 0, totalDiscount: 0 };
        for (let product of getMYCartProducts) {
            totalValues.totalPrice = +totalValues.totalPrice + +product.totalValue;
            totalValues.totalDiscount =
                +totalValues.totalDiscount + +product.discountValue || 0;
        }
        const cartReturn = Object.assign(Object.assign(Object.assign({}, cart), { products: getMYCartProducts }), totalValues);
        return res.json(cartReturn);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyCart = getMyCart;
