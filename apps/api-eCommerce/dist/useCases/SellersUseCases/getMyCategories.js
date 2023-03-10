"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyCategories = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const repositories_1 = require("../../repositories");
const getMyCategories = async (req, res) => {
    try {
        let { page = 1, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const categories = repositories_1.CategoriesRepository;
        const findMyCategories = await categories.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnStoreInMySearch)(filter, user),
        });
        return res.json(findMyCategories);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyCategories = getMyCategories;
