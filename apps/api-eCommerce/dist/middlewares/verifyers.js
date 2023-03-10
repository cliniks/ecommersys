"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const returnUserFromToken_1 = require("../utils/returnUserFromToken");
const getFromHeaders_1 = require("../utils/getFromHeaders");
const timeFunctions_1 = require("../utils/timeFunctions");
const verifyers = {
    async verifyToken(req, res, next) {
        try {
            const token = `${req === null || req === void 0 ? void 0 : req.headers["x-access-token"]}`;
            const tokenSecret = `${process.env.TOKEN_SECRET}`;
            const decode = jsonwebtoken_1.default.decode(token);
            const infos = {
                date: (0, timeFunctions_1.converToLocalTime)(new Date()),
                path: req.originalUrl,
                userId: decode === null || decode === void 0 ? void 0 : decode._id,
            };
            console.log(infos);
            jsonwebtoken_1.default.verify(token, tokenSecret);
            next();
        }
        catch (err) {
            console.log("verifyToken:", err);
            res.status(400).send(err.message);
        }
    },
    async verifyAppToken(req, res, next) {
        try {
            const token = (0, getFromHeaders_1.bearerTokenFromHeader)(`${req === null || req === void 0 ? void 0 : req.headers.authorization}`);
            const tokenSecret = `${process.env.CLINIKS_APPTOKEN}`;
            const verify = (token === null || token === void 0 ? void 0 : token.trim()) === (tokenSecret === null || tokenSecret === void 0 ? void 0 : tokenSecret.trim());
            if (verify)
                next();
            else
                throw new Error("Token da aplicação é necessária, contate o supporte");
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },
    async verifySeller(req, res, next) {
        try {
            const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            if (user.access === 2 || user.access === 99)
                return next();
            else
                return res.status(400).send("Usuário não é um vendedor");
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },
    async verifyThisSeller(req, res, next) {
        try {
            const id = req.params.id;
            if (!id)
                return res
                    .status(400)
                    .send("É preciso encaminhar um id para continuar");
            const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            console.log(user.storeId.toString(), id.toString());
            if (user.storeId.toString() === id.toString())
                return next();
            else
                return res.status(400).send("Usuário não é um vendedor");
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },
    async verifyProductOwner(req, res, next) {
        try {
            const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            // const product: Product | null = await ProductModel.findById(
            //   req.params.id
            // );
            const product = { owner: "teste" };
            if (product) {
                if (user._id.toString() === product.owner)
                    return next();
                else
                    return res.status(400).send("Usuário não é o dono desse produto");
            }
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },
    async verifyAccountOwner(req, res, next) {
        try {
            const GetUserByToken = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            // const user: User | null = await UserModel.findById(req.params.id);
            const user = { _id: "teste" };
            if (user) {
                if (GetUserByToken._id.toString() === user._id.toString())
                    return next();
                else
                    return res.status(400).send("Usuário não é o dono dessa imagem");
            }
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },
    async verifyAdmin(req, res, next) {
        try {
            const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            console.log(user.access);
            if (user.access === 99)
                return next();
            else
                return res.status(400).send("Usuário não é um administrador");
        }
        catch (error) {
            return res.status(400).send(error);
        }
    },
};
exports.verifyers = verifyers;
