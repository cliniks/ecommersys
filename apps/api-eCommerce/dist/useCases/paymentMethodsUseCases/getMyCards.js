"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySellerCards = exports.myUserCards = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const myUserCards = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const myPaymentMethods = await repo.getAll({
            size: 20,
            page: 0,
            filter: { fields: "", key: "owner", value: user._id.toString() },
        });
        return res.json(myPaymentMethods);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível achar");
    }
};
exports.myUserCards = myUserCards;
const mySellerCards = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const myPaymentMethods = await repo.getAll({
            size: 20,
            page: 0,
            filter: { fields: "", key: "owner", value: user.storeId },
        });
        return res.json(myPaymentMethods);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível achar");
    }
};
exports.mySellerCards = mySellerCards;
