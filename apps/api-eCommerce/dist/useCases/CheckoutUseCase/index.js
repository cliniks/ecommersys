"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutUseCases = void 0;
const clientUseCases_1 = require("./clientUseCases");
const sellerUseCases_1 = require("./sellerUseCases");
const update_1 = require("../CrudUseCases/update");
const delete_1 = require("../CrudUseCases/delete");
const createCheckout_1 = require("./createCheckout");
class CheckoutUseCases {
    constructor(repo, clientGPProvider, sellerGPProvider) {
        this.repo = repo;
        this.clientGPProvider = clientGPProvider;
        this.sellerGPProvider = sellerGPProvider;
        this.create = (req, res) => (0, createCheckout_1.createCheckout)(req, res, this.repo);
        this.update = (req, res) => (0, update_1.update)(req, res, this.repo);
        this.delete = (req, res) => (0, delete_1.del)(req, res, this.repo);
        this.asaas.clientUseCases = new clientUseCases_1.UserUseCases(clientGPProvider);
        this.asaas.sellerUseCases = new sellerUseCases_1.SellerUseCases(sellerGPProvider);
    }
}
exports.CheckoutUseCases = CheckoutUseCases;
// export default new CheckoutUseCases()
