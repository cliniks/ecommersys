"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCases = void 0;
// import { IGatewayPagRepository } from "../../repositories/interfaces/IGatewayPagRepository";
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
class UserUseCases {
    constructor(GPProvider // Repository: IGatewayPagRepository
    ) {
        this.GPProvider = GPProvider;
    }
    async newClient(req, res) {
        try {
            const createClient = await this.GPProvider.newClient({ data: req.body });
            res.json(createClient);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
    async genCharge(req, res) {
        try {
            const userData = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            const calculateShipping = await this.GPProvider.genCharge({
                data: req.body,
                client: userData,
                cartID: "1234",
            });
            res.json(calculateShipping);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
    async getCharge(req, res) {
        try {
            const id = req.params.id;
            if (!id)
                res.status(400).send("não foi possível encontrar Id");
            const userData = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            const calculateShipping = await this.GPProvider.getCharge({
                client: userData,
                chargeId: id,
            });
            res.json(calculateShipping);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
}
exports.UserUseCases = UserUseCases;
