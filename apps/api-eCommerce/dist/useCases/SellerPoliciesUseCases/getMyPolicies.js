"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyPolicies = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const getMyPolicies = async (req, res, repo) => {
    try {
        let { page = 0, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const findMyPolicies = await repo.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnStoreInMySearch)(filter, user),
        });
        return res.json(findMyPolicies);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyPolicies = getMyPolicies;
