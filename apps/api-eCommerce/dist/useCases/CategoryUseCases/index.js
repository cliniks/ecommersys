"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUseCases = void 0;
/* Importing the add function from the add.ts file in the CrudUseCases folder. */
// import { add } from "../CrudUseCases/add";
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const CategoryRepository_1 = require("../../repositories/implementations/CategoryRepository");
const createCategory_1 = require("./createCategory");
const category = new CategoryRepository_1.CategoryRepository();
exports.categoryUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, category),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, category),
    Add: async (req, res) => await (0, createCategory_1.createCategory)(req, res, category),
    Update: async (req, res) => await (0, update_1.update)(req, res, category),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, category),
};
