"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = void 0;
const repositories_1 = require("../../repositories");
const userRepo = repositories_1.UsersRepository;
const findOne = async (req, res, repo) => {
    const getSingle = await repo.getOne(req.query);
    if (getSingle) {
        const getOwner = await userRepo.getOne({
            key: "_id",
            value: getSingle.owner,
        });
        return res.json(Object.assign(Object.assign({}, getSingle._doc), { owner: getOwner }));
    }
    return res.json(getSingle);
};
exports.findOne = findOne;
