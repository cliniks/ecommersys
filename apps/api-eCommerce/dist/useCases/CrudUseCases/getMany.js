"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMany = void 0;
const getMany = async (req, res, repository) => {
    try {
        const { fields } = req.query;
        const getMany = await repository.getMany(req.body, fields);
        return res.json(getMany);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
};
exports.getMany = getMany;
