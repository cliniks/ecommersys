"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerPoliciesUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const update_1 = require("../CrudUseCases/update");
const createPolicy_1 = require("./createPolicy");
const getMyPolicies_1 = require("./getMyPolicies");
const repositories_1 = require("../../repositories");
const getAll_1 = require("../CrudUseCases/getAll");
const policy = repositories_1.StorePoliciesRepository;
exports.sellerPoliciesUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, policy),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, policy),
    getMyPolicies: async (req, res) => await (0, getMyPolicies_1.getMyPolicies)(req, res, policy),
    Add: async (req, res) => await (0, createPolicy_1.createPolicy)(req, res, policy),
    Update: async (req, res) => await (0, update_1.update)(req, res, policy),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, policy),
};
