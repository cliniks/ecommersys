"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const repositories_1 = require("../../repositories");
const userRepo = repositories_1.UsersRepository;
const findAll = async (req, res, repo) => {
    const { page = 0, size = 10, filter } = req.query;
    const confirmFilter = typeof filter === "string" ? JSON.parse(filter) : filter;
    const getAll = await repo.getAll({ page, size, filter: confirmFilter });
    const result = getAll.result;
    let allResults = [];
    for (let key in getAll.result) {
        const getOwner = await userRepo.getOne({
            key: "_id",
            value: result[key].owner,
        });
        allResults.push(Object.assign(Object.assign({}, result[key]._doc), { owner: getOwner }));
    }
    const toReturn = Object.assign(Object.assign({}, getAll), { result: allResults });
    return res.json(toReturn);
};
exports.findAll = findAll;
