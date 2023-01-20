"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myUser = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const myUser = async (req, res) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("você não esta logado.");
    }
};
exports.myUser = myUser;
