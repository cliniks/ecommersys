"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitate = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const solicitate = async (req, res, repo) => {
    try {
        const { name, storeInfo } = req.body;
        const getUser = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const add = await repo.addOne({ name, storeInfo, owner: getUser._id });
        res.json(add);
    }
    catch (err) {
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.solicitate = solicitate;
