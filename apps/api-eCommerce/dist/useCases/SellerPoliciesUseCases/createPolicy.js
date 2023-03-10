"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPolicy = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const createPolicy = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let newPolicy = req.body;
        newPolicy.owner = user.storeId;
        return res.json(await repository.addOne(newPolicy));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar coupon");
    }
};
exports.createPolicy = createPolicy;
