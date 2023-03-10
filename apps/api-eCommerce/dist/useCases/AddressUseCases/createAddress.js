"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreAddress = exports.createUserAddress = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const createUserAddress = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let newAddress = req.body;
        newAddress.owner = user._id;
        return res.json(await repository.addOne(newAddress));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar coupon");
    }
};
exports.createUserAddress = createUserAddress;
const createStoreAddress = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let newAddress = req.body;
        newAddress.owner = user.storeId;
        return res.json(await repository.addOne(newAddress));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar coupon");
    }
};
exports.createStoreAddress = createStoreAddress;
