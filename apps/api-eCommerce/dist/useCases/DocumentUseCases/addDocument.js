"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDocument = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const addDocument = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const DocumentToUpdate = Object.assign(Object.assign({}, req.body), { owner: user._id });
        const addDocuemnt = await repo.addOne(DocumentToUpdate);
        return res.json(addDocuemnt);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível adicionar o documento");
    }
};
exports.addDocument = addDocument;
