"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccountExistence = exports.auth = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const enumErrors_1 = require("../../errors/enumErrors");
const repositories_1 = require("../../repositories");
const User = repositories_1.UsersRepository;
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
                throw new Error(enumErrors_1.EnumErrorHandling[enumErrors_1.EnumErrorHandling.incorrectPassword]);
            }
        }
        else {
            throw new Error(enumErrors_1.EnumErrorHandling[enumErrors_1.EnumErrorHandling.noUserWithThisEmail]);
        }
    }
    catch (error) {
        res.status(400).send(error.toString());
    }
};
exports.auth = auth;
const verifyAccountExistence = async (req, res) => {
    try {
        const { username } = req.body;
        const verify = await User.getOne({ key: "username", value: username });
        if (verify)
            return res.json(true);
        return res.json(false);
    }
    catch (err) {
        return res.json(false);
    }
};
exports.verifyAccountExistence = verifyAccountExistence;
