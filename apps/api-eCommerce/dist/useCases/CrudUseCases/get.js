"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const get = async (req, res, repository) => {
    var _a, _b;
    try {
        const { key, value } = req.query;
        const getOne = await repository.getOne({ key, value });
        console.log({ key }, { value }, (_a = getOne[key]) === null || _a === void 0 ? void 0 : _a.toString());
        if (!getOne || !getOne[key] || ((_b = getOne[key]) === null || _b === void 0 ? void 0 : _b.toString()) !== value)
            throw new Error("não foi possível encontrar");
        return res.json(getOne);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
};
exports.get = get;
