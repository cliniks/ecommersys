"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUseCases = void 0;
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const createProduct_1 = require("./createProduct");
const products = new ProductsRepository_1.ProductsRepository();
exports.productsUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, products),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, products),
    CreateProduct: async (req, res) => await (0, createProduct_1.createProduct)(req, res, products),
    Update: async (req, res) => await (0, update_1.update)(req, res, products),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, products),
};
