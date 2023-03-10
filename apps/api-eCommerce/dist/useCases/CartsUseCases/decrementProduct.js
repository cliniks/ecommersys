"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrementProduct = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const decrementProduct = async (req, res, repo) => {
    var _a, _b;
    try {
        const { cartId, productId, amount, } = req.body;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const cart = await repo.getOne({
            key: "owner",
            value: user._id,
        });
        let products = cart.products;
        if (products.find((item) => productId === item.productId)) {
            const indexOf = products.findIndex((item) => item.productId === productId);
            if (+((_a = products[indexOf]) === null || _a === void 0 ? void 0 : _a.amount) === 1) {
                products.splice(indexOf, 1);
            }
            if (+((_b = products[indexOf]) === null || _b === void 0 ? void 0 : _b.amount) > 1) {
                products[indexOf].amount = +products[indexOf].amount - amount;
            }
        }
        else {
            return res.json("Item Removido");
        }
        await repo.update(cartId, { products: products });
        const getUpdated = await repo.getOne({ key: "_id", value: cartId });
        return res.json(getUpdated);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível decrementar produto");
    }
};
exports.decrementProduct = decrementProduct;
