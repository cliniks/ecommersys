"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyStore = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const getMyStore = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const findMyStore = await repo.getOne({
            key: "_id",
            value: user.storeId,
        });
        return res.json(findMyStore);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyStore = getMyStore;
