"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUseCases = void 0;
const repositories_1 = require("../../repositories");
const emailToken_1 = require("./emailToken");
const updateUserInfo_1 = require("./updateUserInfo");
const userGetProduct_1 = require("./userGetProduct");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const delete_1 = require("../CrudUseCases/delete");
const updateImage_1 = require("./updateImage");
const get_1 = require("../CrudUseCases/get");
const newUser_1 = require("./newUser");
const myUser_1 = require("./myUser");
const getMany_1 = require("../CrudUseCases/getMany");
const users = repositories_1.UsersRepository;
const cache = new repositories_1.RedisImplementation();
exports.usersUseCases = {
    FindOne: async (req, res) => await (0, get_1.get)(req, res, users),
    FindMany: async (req, res) => await (0, getMany_1.getMany)(req, res, users),
    getMyUser: async (req, res) => await (0, myUser_1.myUser)(req, res),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, users),
    newUser: async (req, res) => await (0, newUser_1.newUser)(req, res, users),
    updateImage: async (req, res) => await (0, updateImage_1.updateImage)(req, res, users),
    updateUserInfo: async (req, res) => await (0, updateUserInfo_1.updateUserInfo)(req, res, users),
    Update: async (req, res) => await (0, update_1.update)(req, res, users),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, users),
    createEmailToken: async (req, res) => await (0, emailToken_1.createEmailToken)(req, res, cache),
    confirmEmailToken: async (req, res) => await (0, emailToken_1.confirmEmailToken)(req, res, cache),
    seeProduct: async (req, res) => await (0, userGetProduct_1.userGetProduct)(req, res, users),
};
