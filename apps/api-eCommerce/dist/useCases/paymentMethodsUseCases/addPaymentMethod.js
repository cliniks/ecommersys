"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPaymentMethod = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const tokenizeCard_1 = require("../../providers/useCases/tokenizeCard");
const ClientAsaasImplementation_1 = require("../../providers/implementations/ClientAsaasImplementation");
const gatewayPag = new ClientAsaasImplementation_1.ClientAsaasImplementation();
const AddPaymentMethod = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const create = await (0, tokenizeCard_1.TokenizeCardUseCase)(req.body, gatewayPag);
        let toAdd = Object.assign(Object.assign({}, create), { owner: user._id });
        return res.json(await repo.addOne(toAdd));
    }
    catch (err) {
        console.error(err.toString());
        return res.status(400).send("não foi possível adicionar o cartão");
    }
};
exports.AddPaymentMethod = AddPaymentMethod;
