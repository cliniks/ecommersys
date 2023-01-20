"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = async (req, res) => {
    try {
        const { token } = req.body;
        jsonwebtoken_1.default.verify(token, `${process.env.TOKEN_SECRET}`, (err, decoded) => {
            if (err)
                return res.status(200).send(false);
            decoded._id;
            res.status(200).send(true);
        });
    }
    catch (error) {
        res.status(200).send(false);
    }
};
exports.verifyToken = verifyToken;
