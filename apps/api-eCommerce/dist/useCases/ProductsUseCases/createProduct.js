"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const createProduct = async (req, res, repo) => {
    try {
        const { body } = req;
        let product = Object.assign({}, body);
        if (!product.price)
            product.price = "0";
        if (!product.regularPrice)
            product.regularPrice = "0";
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        product.owner = user.storeId;
        const resolveProductAdd = await repo.addOne(product);
        return res.json(resolveProductAdd);
    }
    catch (err) {
        console.log("createProduct", err);
        return res.status(400).send("não foi possível criar.");
    }
};
exports.createProduct = createProduct;
