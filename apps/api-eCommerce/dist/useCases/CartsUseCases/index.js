"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartsUseCases = void 0;
const add_1 = require("../CrudUseCases/add");
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const getMyCart_1 = require("./getMyCart");
const incrementProduct_1 = require("./incrementProduct");
const decrementProduct_1 = require("./decrementProduct");
const repositories_1 = require("../../repositories");
const insertCoupon_1 = require("./insertCoupon");
const carts = repositories_1.CartsRepository;
exports.cartsUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, carts),
    getMyCart: async (req, res) => await (0, getMyCart_1.getMyCart)(req, res, carts),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, carts),
    Add: async (req, res) => await (0, add_1.add)(req, res, carts),
    Update: async (req, res) => await (0, update_1.update)(req, res, carts),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, carts),
    increment: async (req, res) => await (0, incrementProduct_1.incrementProduct)(req, res, carts),
    decrement: async (req, res) => await (0, decrementProduct_1.decrementProduct)(req, res, carts),
    insertCoupon: async (req, res) => await (0, insertCoupon_1.insertCoupon)(req, res, carts),
};
