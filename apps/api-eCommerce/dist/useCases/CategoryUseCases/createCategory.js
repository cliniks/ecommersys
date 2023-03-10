"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const createCategory = async (req, res, repository) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        if (user.access !== 99)
            throw new Error("Usuário não é administrador");
        let newCategory = req.body;
        newCategory.owner = user._id;
        newCategory.isGlobal = true;
        return res.json(await repository.addOne(newCategory));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível criar categoria");
    }
};
exports.createCategory = createCategory;
