"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductStock = void 0;
const repositories_1 = require("../../repositories");
const productRepo = repositories_1.ProductsRepository;
const UpdateProductStock = async (product, amount) => {
    const ProductQauntity = product.stockInfo.qnt - amount;
    const update = await productRepo.update(product._id, {
        stockInfo: Object.assign(Object.assign({}, product.stockInfo), { qnt: ProductQauntity }),
    });
    return update;
};
exports.UpdateProductStock = UpdateProductStock;
