"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commission = void 0;
const add_1 = require("../CrudUseCases/add");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const repositories_1 = require("../../repositories");
const storeCommissions_1 = require("./storeCommissions");
const adminCommissions = repositories_1.AdminCommissionRepository;
const globalCommission = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, adminCommissions.globalCommission),
    addOne: async (req, res) => await (0, add_1.add)(req, res, adminCommissions.globalCommission),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, adminCommissions.globalCommission),
    Update: async (req, res) => await (0, update_1.update)(req, res, adminCommissions.globalCommission),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, adminCommissions.globalCommission),
};
const productsCommission = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, adminCommissions.productsCommission),
    addOne: async (req, res) => await (0, add_1.add)(req, res, adminCommissions.productsCommission),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, adminCommissions.productsCommission),
    Update: async (req, res) => await (0, update_1.update)(req, res, adminCommissions.productsCommission),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, adminCommissions.productsCommission),
    storeProductCommission: async (req, res) => (0, storeCommissions_1.storeProductsCommission)(req, res),
};
const categoryCommission = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, adminCommissions.categoryCommission),
    addOne: async (req, res) => await (0, add_1.add)(req, res, adminCommissions.categoryCommission),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, adminCommissions.categoryCommission),
    Update: async (req, res) => await (0, update_1.update)(req, res, adminCommissions.categoryCommission),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, adminCommissions.categoryCommission),
    storeCategoryCommission: async (req, res) => (0, storeCommissions_1.storeCategoriesCommission)(req, res),
};
const storeCommission = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, adminCommissions.storeCommission),
    addOne: async (req, res) => await (0, add_1.add)(req, res, adminCommissions.storeCommission),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, adminCommissions.storeCommission),
    Update: async (req, res) => await (0, update_1.update)(req, res, adminCommissions.storeCommission),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, adminCommissions.storeCommission),
};
exports.commission = {
    Global: globalCommission,
    Product: productsCommission,
    Category: categoryCommission,
    Store: storeCommission,
};
