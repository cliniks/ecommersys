"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const getMyProducts_1 = require("./getMyProducts");
const addDocument_1 = require("./addDocument");
const repositories_1 = require("../../repositories");
const repo = repositories_1.DocumentsRepository;
exports.documentUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, repo),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, repo),
    getMyDocuments: async (req, res) => await (0, getMyProducts_1.getMyDocuments)(req, res, repo),
    Add: async (req, res) => await (0, addDocument_1.addDocument)(req, res, repo),
    Update: async (req, res) => await (0, update_1.update)(req, res, repo),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, repo),
};
