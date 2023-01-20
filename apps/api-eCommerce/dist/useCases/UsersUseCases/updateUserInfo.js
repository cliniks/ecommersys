"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfo = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const updateUserInfo = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        res.json(await repository.updateUserInfo(user, req.body));
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível atualziar");
    }
};
exports.updateUserInfo = updateUserInfo;
