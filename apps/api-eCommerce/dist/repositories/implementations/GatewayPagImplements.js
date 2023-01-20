"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayPagRepository = void 0;
const ConnectRepo_1 = require("./ConnectRepo");
class GatewayPagRepository extends ConnectRepo_1.ConnectRepo {
    // private repo = this.gatewayPagDB.model();
    constructor() {
        super();
    }
    async AddPayment() { }
    async UpdatePayment() { }
}
exports.GatewayPagRepository = GatewayPagRepository;
