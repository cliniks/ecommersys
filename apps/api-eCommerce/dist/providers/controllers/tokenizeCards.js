"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizeCard = void 0;
const tokenizeCard_1 = require("../useCases/tokenizeCard");
const ClientAsaasImplementation_1 = require("../implementations/ClientAsaasImplementation");
const gatewayPag = new ClientAsaasImplementation_1.ClientAsaasImplementation();
const TokenizeCard = async (req, res) => {
    try {
        const create = await (0, tokenizeCard_1.TokenizeCardUseCase)(req.body, gatewayPag);
        res.status(200).send(create);
    }
    catch (err) {
        res.status(400).send("error");
    }
};
exports.TokenizeCard = TokenizeCard;
