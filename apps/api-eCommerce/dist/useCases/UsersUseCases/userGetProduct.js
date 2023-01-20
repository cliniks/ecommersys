"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGetProduct = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const userGetProduct = async (req, res, repository) => {
    try {
        const { id } = req.params;
        if (!id)
            throw new Error("não foi fornecido um id");
        const productRepo = await new ProductsRepository_1.ProductsRepository();
        let product = await productRepo.getOne({
            key: "_id",
            value: id,
        });
        let user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        if (!product)
            throw new Error("Produto não encontrado");
        product.statistics.views !== undefined || product.statistics.views !== 0
            ? (product.statistics.views += 1)
            : (product.statistics.views = 0);
        if (!user.statistics.productsViews.includes(`${product._id}`))
            user.statistics.productsViews.push(`${product._id}`);
        repository.update(`${user._id}`, { statistics: user.statistics });
        await productRepo.update(id, { statistics: product.statistics });
        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("você não esta logado.");
    }
};
exports.userGetProduct = userGetProduct;
