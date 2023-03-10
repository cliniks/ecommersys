"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const createProduct_1 = require("./createProduct");
const repositories_1 = require("../../repositories");
const favoriteProduct_1 = require("./favoriteProduct");
const likeProduct_1 = require("./likeProduct");
const getProduct_1 = require("./getProduct");
const getMany_1 = require("../CrudUseCases/getMany");
const products = repositories_1.ProductsRepository;
exports.productsUseCases = {
    FineOne: async (req, res) => await (0, getProduct_1.getSingleProduct)(req, res, products),
    FindMany: async (req, res) => await (0, getMany_1.getMany)(req, res, products),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, products),
    CreateProduct: async (req, res) => await (0, createProduct_1.createProduct)(req, res, products),
    Update: async (req, res) => await (0, update_1.update)(req, res, products),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, products),
    favoriteProduct: async (req, res) => await (0, favoriteProduct_1.favoriteProduct)(req, res, products),
    likeProduct: async (req, res) => await (0, likeProduct_1.likeProduct)(req, res, products),
};
