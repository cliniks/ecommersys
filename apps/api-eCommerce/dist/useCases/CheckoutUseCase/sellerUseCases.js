"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerUseCases = void 0;
class SellerUseCases {
    constructor(SellerProvider) {
        this.SellerProvider = SellerProvider;
    }
    // Pré visualização de etiquetas
    async addStore(req, res) {
        try {
            const add = await this.SellerProvider.addStore(req.body);
            res.json(add);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
    async confirmPayment(req, res) {
        try {
            const { orders } = req.body;
            const previewTags = await this.SellerProvider.confirmPayment(orders);
            res.json(previewTags);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
    // Geração de etiquetas
    async getAccount(_, res) {
        try {
            const generateTag = await this.SellerProvider.getAccount();
            res.json(generateTag);
        }
        catch (err) {
            res.status(400).send({ err });
        }
    }
}
exports.SellerUseCases = SellerUseCases;
