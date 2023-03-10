"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyCouponsFunc = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const repositories_1 = require("../../repositories");
const getMyCouponsFunc = async (req, res) => {
    try {
        let { page = 1, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        console.log(req.query);
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const coupons = repositories_1.CouponsRepository;
        const findMyCoupons = await coupons.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnStoreInMySearch)(filter, user),
        });
        return res.json(findMyCoupons);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyCouponsFunc = getMyCouponsFunc;
