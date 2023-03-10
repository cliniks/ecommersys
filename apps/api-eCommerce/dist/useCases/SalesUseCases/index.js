"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const repositories_1 = require("../../repositories");
// import { createPayment } from "./createPayment";
const createPaymentUseCase_1 = require("./genPayment/createPaymentUseCase");
const sales = repositories_1.SalesRepository;
exports.salesUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, sales),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, sales),
    Add: async (req, res) => await (0, createPaymentUseCase_1.createPayment2)(req, res, sales),
    Update: async (req, res) => await (0, update_1.update)(req, res, sales),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, sales),
};
