"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = async (req, res, repository) => {
    try {
        console.log(req.body);
        return res.json(await repository.addOne(req.body));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.add = add;
