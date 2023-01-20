"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const UsersRepository_1 = require("../../repositories/implementations/UsersRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ErrorHandling_1 = require("../../errors/ErrorHandling");
const enumErrors_1 = require("../../errors/enumErrors");
const User = new UsersRepository_1.UsersRepository();
const auth = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.getOne({
            key: "username",
            value: username,
        });
        if (user) {
            const match = await bcrypt_1.default.compare(password, user.password);
            const accessToken = jsonwebtoken_1.default.sign({ _id: user._id, seller: user.storeId }, `${process.env.TOKEN_SECRET}`);
            if (match) {
                res.json({
                    accessToken: accessToken,
                    userId: user === null || user === void 0 ? void 0 : user._id,
                    seller: user.storeId,
                });
            }
            else {
                (0, ErrorHandling_1.ErrorHandling)({ code: enumErrors_1.EnumErrorHandling.incorrectPassword, res });
            }
        }
        else {
            (0, ErrorHandling_1.ErrorHandling)({ code: enumErrors_1.EnumErrorHandling.noUserWithThisEmail, res });
        }
    }
    catch (error) {
        console.log(error);
        (0, ErrorHandling_1.ErrorHandling)({ code: enumErrors_1.EnumErrorHandling.noUserWithThisEmail, res });
    }
};
exports.auth = auth;
