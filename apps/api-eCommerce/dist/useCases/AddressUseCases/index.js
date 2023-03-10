"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const update_1 = require("../CrudUseCases/update");
const createAddress_1 = require("./createAddress");
const getMyAddress_1 = require("./getMyAddress");
const getAll_1 = require("../CrudUseCases/getAll");
const repositories_1 = require("../../repositories");
const setDefault_1 = require("./setDefault");
const address = repositories_1.AddressesRepository;
exports.addressUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, address),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, address),
    FindAllUser: async (req, res) => await (0, getMyAddress_1.getMyUserAddress)(req, res, address),
    FindAllStore: async (req, res) => await (0, getMyAddress_1.getMyStoreAddress)(req, res, address),
    AddUser: async (req, res) => (0, createAddress_1.createUserAddress)(req, res, address),
    AddSeller: async (req, res) => (0, createAddress_1.createStoreAddress)(req, res, address),
    Update: async (req, res) => await (0, update_1.update)(req, res, address),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, address),
    setDefault: async (req, res) => await (0, setDefault_1.setDefaultAddress)(req, res),
};
