"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = void 0;
const del = async (req, res, repository) => {
    try {
        await repository.delete(req.params.id);
        return res.json("Deletado com sucesso");
    }
    catch (err) {
        console.log(err);
        return res.json("não foi possível achar");
    }
};
exports.del = del;
