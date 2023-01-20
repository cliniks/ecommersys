"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const update = async (req, res, repository) => {
    try {
        return res.json(await repository.update(req.params.id, req.body));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.update = update;
