"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const getAll = async (req, res, repository) => {
    try {
        const { page, size, filter } = req.query;
        return res.json(await repository.getAll({
            page: page && +page,
            size: size && +size,
            filter,
        }));
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.getAll = getAll;
