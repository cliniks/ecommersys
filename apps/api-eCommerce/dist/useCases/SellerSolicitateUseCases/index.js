"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersSolicitateUseCases = void 0;
const StoreSolicitateRepo_1 = require("../../repositories/implementations/StoreSolicitateRepo");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const solicitate_1 = require("../SellerSolicitateUseCases/solicitate");
const confirm_1 = require("./confirm");
const SolicitateRepo = new StoreSolicitateRepo_1.StoreSolicitateRepository();
exports.sellersSolicitateUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, SolicitateRepo),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, SolicitateRepo),
    Solicitate: async (req, res) => await (0, solicitate_1.solicitate)(req, res, SolicitateRepo),
    Confirm: async (req, res) => await (0, confirm_1.confirm)(req, res, SolicitateRepo),
};
