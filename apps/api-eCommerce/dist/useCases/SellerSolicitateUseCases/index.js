"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersSolicitateUseCases = void 0;
const solicitate_1 = require("../SellerSolicitateUseCases/solicitate");
const confirm_1 = require("./confirm");
const findOne_1 = require("./findOne");
const findAll_1 = require("./findAll");
const reject_1 = require("./reject");
const repositories_1 = require("../../repositories");
const delete_1 = require("../CrudUseCases/delete");
const SolicitateRepo = repositories_1.StoreSolicitationRepository;
exports.sellersSolicitateUseCases = {
    FineOne: async (req, res) => await (0, findOne_1.findOne)(req, res, SolicitateRepo),
    FindAll: async (req, res) => await (0, findAll_1.findAll)(req, res, SolicitateRepo),
    Solicitate: async (req, res) => await (0, solicitate_1.solicitate)(req, res, SolicitateRepo),
    Confirm: async (req, res) => await (0, confirm_1.confirm)(req, res, SolicitateRepo),
    Reject: async (req, res) => await (0, reject_1.reject)(req, res, SolicitateRepo),
    delete: async (req, res) => await (0, delete_1.del)(req, res, SolicitateRepo),
};
