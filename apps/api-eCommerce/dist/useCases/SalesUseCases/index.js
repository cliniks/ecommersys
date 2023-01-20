"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUseCases = void 0;
const SalesRepository_1 = require("../../repositories/implementations/SalesRepository");
const add_1 = require("../CrudUseCases/add");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const sales = new SalesRepository_1.SalesRepository();
exports.salesUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, sales),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, sales),
    Add: async (req, res) => await (0, add_1.add)(req, res, sales),
    Update: async (req, res) => await (0, update_1.update)(req, res, sales),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, sales),
};
