"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const get = async (req, res, repository) => {
    try {
        const { key, value } = req.query;
        return res.json(await repository.getOne({ key, value }));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.get = get;
