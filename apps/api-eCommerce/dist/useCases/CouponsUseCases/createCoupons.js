"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoupon = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const createCoupon = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let newCoupon = req.body;
        newCoupon.owner = user.storeId;
        return res.json(await repository.addOne(newCoupon));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar coupon");
    }
};
exports.createCoupon = createCoupon;
