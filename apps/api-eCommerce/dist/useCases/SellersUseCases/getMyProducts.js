"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyProducts = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const repositories_1 = require("../../repositories");
const getMyProducts = async (req, res) => {
    try {
        let { page = 1, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const products = repositories_1.ProductsRepository;
        const findMyProducts = await products.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnStoreInMySearch)(filter, user),
        });
        return res.json(findMyProducts);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyProducts = getMyProducts;
