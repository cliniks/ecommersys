"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyDocuments = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const getMyDocuments = async (req, res, repo) => {
    try {
        let { page = 0, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const findMyDocuments = await repo.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnUserInMySearch)(filter, user),
        });
        return res.json(findMyDocuments);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyDocuments = getMyDocuments;
