"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultAddress = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const repositories_1 = require("../../repositories");
const userRepo = repositories_1.UsersRepository;
const setDefaultAddress = async (req, res) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        let { id } = req.params;
        const setDefault = await userRepo.updateUserInfo(user, {
            defaultAddress: `${id}`,
        });
        return res.json(setDefault);
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar coupon");
    }
};
exports.setDefaultAddress = setDefaultAddress;
