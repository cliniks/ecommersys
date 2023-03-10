"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const enumErrors_1 = require("../../errors/enumErrors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const repositories_1 = require("../../repositories");
const userRepo = repositories_1.UsersRepository;
const changePassword = async (req, res) => {
    try {
        const { password, email } = req.body;
        const getUser = await userRepo.getOne({ key: "username", value: email });
        if (!getUser)
            throw new Error("Usuário não possui conta registrada");
        const hashedNewPassword = await bcrypt_1.default.hash(password, 10);
        userRepo.update(`${getUser._id}`, {
            password: hashedNewPassword,
        });
        return res.json("Atualizado com sucesso!");
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send(enumErrors_1.EnumErrorHandling[enumErrors_1.EnumErrorHandling.noUserWithThisEmail]);
    }
};
exports.changePassword = changePassword;
