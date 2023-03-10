"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/validateAppToken", (req, res) => {
    try {
        const { appToken } = req.body;
        // gerar uma tabela para armazenar o token e vincular db para token
        const confirmAppToken = appToken === process.env.CLINIKS_APPTOKEN;
        res.json(confirmAppToken);
    }
    catch (err) {
        res.status(400).send(false);
    }
});
router.get("/createAccount", async (req, res) => {
    try {
        await axios_1.default.post("https://hook.us1.make.com/qyz7y8u0g2y8g3nkhkn685iznyxkfpm7", {
            type: "createAccount",
            userInfo: {
                name: "Ricardo2",
                lastName: "Diniz",
                cpf: "",
                cnpj: "33957349000175",
                cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
                enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
                enterpriseName: "API4COM",
                address: "SC  401",
                number: "4150",
                phone: "(48) 99126-0289",
                complement: "SALA  1 E 2",
                birthDate: "",
                city: "Florianópolis",
                state: "SC",
                email: "diniz.ricardo@gmail.com",
                defaultAddress: "63e173b4e6678387b9c42ebc",
            },
        });
        res.json("Usuário Criado");
    }
    catch (err) {
        res.status(500).send("Não foi possível");
    }
});
router.get("/sellerSolicitation", async (req, res) => {
    try {
        await axios_1.default.post("https://hook.us1.make.com/qyz7y8u0g2y8g3nkhkn685iznyxkfpm7", {
            type: "sellerSolicitation",
            storeInfo: {
                cnpj: "33957349000175",
                cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
                address: "SC  401",
                number: "4150",
                complement: "SALA  1 E 2",
                enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
                enterpriseName: "API4COM",
                phone: "(48) 99126-0289",
                city: "Florianópolis",
                state: "SC",
                email: "diniz.ricardo@gmail.com",
            },
            userInfo: {
                name: "Ricardo",
                lastName: "Diniz",
                cpf: "",
                cnpj: "33957349000175",
                cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
                enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
                enterpriseName: "API4COM",
                address: "SC  401",
                number: "4150",
                phone: "(48) 99126-0289",
                complement: "SALA  1 E 2",
                birthDate: "",
                city: "Florianópolis",
                state: "SC",
                email: "diniz.ricardo@gmail.com",
                defaultAddress: "63e173b4e6678387b9c42ebc",
            },
        });
        res.json("Usuário Criado");
    }
    catch (err) {
        res.status(500).send("Não foi possível");
    }
});
