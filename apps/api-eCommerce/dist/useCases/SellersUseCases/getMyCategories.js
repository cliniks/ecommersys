"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyCategories = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const CategoryRepository_1 = require("../../repositories/implementations/CategoryRepository");
const getMyCategories = async (req, res) => {
    try {
        let { page, size, filter } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const categories = new CategoryRepository_1.CategoryRepository();
        filter = {
            key: `owner ${filter === null || filter === void 0 ? void 0 : filter.key}`,
            value: `${user.storeId}  ${filter === null || filter === void 0 ? void 0 : filter.value}`,
            fields: "",
        };
        const findMyCategories = await categories.getAll({ page, size, filter });
        res.json(findMyCategories);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyCategories = getMyCategories;
