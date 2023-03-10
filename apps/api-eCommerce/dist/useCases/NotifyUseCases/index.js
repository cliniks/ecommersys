"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const repositories_1 = require("../../repositories");
const add_1 = require("../CrudUseCases/add");
const getMany_1 = require("../CrudUseCases/getMany");
const getMyNotifications_1 = require("./getMyNotifications");
const notifications = repositories_1.notifyRepository;
exports.notifyUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, notifications),
    getMyUserNotifications: async (req, res) => await (0, getMyNotifications_1.getMyUserNotifications)(req, res),
    getMySellerNotifications: async (req, res) => await (0, getMyNotifications_1.getMySellerNotifications)(req, res),
    getGlobalNotifications: async (req, res) => await (0, getMyNotifications_1.getMyGlobalNotifications)(req, res),
    findMany: async (req, res) => await (0, getMany_1.getMany)(req, res, notifications),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, notifications),
    Add: async (req, res) => await (0, add_1.add)(req, res, notifications),
    Update: async (req, res) => await (0, update_1.update)(req, res, notifications),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, notifications),
};
