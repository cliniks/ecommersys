"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyProducts = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const getMyProducts = async (req, res) => {
    try {
        let { page, size, filter } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const products = new ProductsRepository_1.ProductsRepository();
        filter = {
            key: `owner ${filter === null || filter === void 0 ? void 0 : filter.key}`,
            value: `${user.storeId}  ${filter === null || filter === void 0 ? void 0 : filter.value}`,
            fields: "",
        };
        const findMyProducts = await products.getAll({ page, size, filter });
        res.json(findMyProducts);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyProducts = getMyProducts;
