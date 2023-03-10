"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const getAll = async (req, res, repository) => {
    try {
        const { page, size, filter } = req.query;
        const filterConfirm = typeof filter === "string" ? JSON.parse(filter) : filter;
        return res.json(await repository.getAll({
            page: page && +page,
            size: size && +size,
            filter: filterConfirm,
        }));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.getAll = getAll;
