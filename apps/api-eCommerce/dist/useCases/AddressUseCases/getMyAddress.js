"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyUserAddress = exports.getMyStoreAddress = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const searchsUtils_1 = require("../../utils/searchsUtils");
const getMyStoreAddress = async (req, res, addresses) => {
    try {
        let { page = 1, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const findMyAddresses = await addresses.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnStoreInMySearch)(filter, user),
        });
        return res.json(findMyAddresses);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyStoreAddress = getMyStoreAddress;
const getMyUserAddress = async (req, res, addresses) => {
    try {
        let { page = 1, size = 10, filter = { key: "", value: "", fields: "" }, } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const findMyAddresses = await addresses.getAll({
            page,
            size,
            filter: (0, searchsUtils_1.addMyOwnUserInMySearch)(filter, user),
        });
        return res.json(findMyAddresses);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyUserAddress = getMyUserAddress;
