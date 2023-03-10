"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementProduct = void 0;
const repositories_1 = require("../../repositories");
const productRepo = repositories_1.ProductsRepository;
const incrementProduct = async (req, res, repo) => {
    try {
        const { cartId, productId, amount } = req.body;
        const cart = await repo.getOne({ key: "_id", value: cartId });
        const getProduct = await productRepo.getOne({
            key: "_id",
            value: productId,
        });
        const productToAdd = { productId, amount };
        let products = cart.products;
        if (products.find((item) => productId === item.productId)) {
            console.log("tem o item");
            const indexOf = products.findIndex((item) => item.productId === productId);
            if (products[indexOf].amount < getProduct.stockInfo.qnt)
                products[indexOf].amount = +products[indexOf].amount + amount;
        }
        else {
            console.log("não tem o item");
            products.push(productToAdd);
        }
        await repo.update(cartId, { products: products });
        const getUpdated = await repo.getOne({ key: "_id", value: cartId });
        return res.json(getUpdated);
    }
    catch (err) {
        return res.status(400).send("não foi possível incrementar produto");
    }
};
exports.incrementProduct = incrementProduct;
