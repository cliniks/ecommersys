"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartsUseCases = void 0;
const CartsRepository_1 = require("../../repositories/implementations/CartsRepository");
const add_1 = require("../CrudUseCases/add");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const carts = new CartsRepository_1.CartsRepository();
exports.cartsUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, carts),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, carts),
    Add: async (req, res) => await (0, add_1.add)(req, res, carts),
    Update: async (req, res) => await (0, update_1.update)(req, res, carts),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, carts),
};
