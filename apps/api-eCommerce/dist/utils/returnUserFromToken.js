"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromToken = exports.returnUserFromToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UsersRepository_1 = require("../repositories/implementations/UsersRepository");
const returnUserFromToken = async (req) => {
    try {
        const repo = new UsersRepository_1.UsersRepository();
        const token = req.headers["x-access-token"];
        const decoded = jsonwebtoken_1.default.decode(`${token}`);
        const userID = decoded._id;
        const user = (await repo.getOne({
            key: "_id",
            value: userID,
        }));
        return user;
    }
    catch (error) {
        throw new Error("Não foi possível achar um usuário a partir desse token!");
    }
};
exports.returnUserFromToken = returnUserFromToken;
const getUserFromToken = async (token) => {
    try {
        const repo = new UsersRepository_1.UsersRepository();
        const decoded = jsonwebtoken_1.default.decode(`${token}`);
        const userID = decoded._id;
        return (await repo.getOne({
            key: "_id",
            value: userID,
        }));
    }
    catch (error) {
        throw new Error("Não foi possível achar um usuário a partir desse token!");
    }
};
exports.getUserFromToken = getUserFromToken;
