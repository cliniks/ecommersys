"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = require("../../logs");
const emailSender_1 = require("./emailSender");
const products_1 = require("./products");
const sellers_1 = require("./sellers");
class Global {
    constructor() {
        this.products = new products_1.GlobalProducts();
        this.sellers = new sellers_1.GlobalSellers();
        this.emailSender = new emailSender_1.GlobalEmailSender();
        this.logs = logs_1.Logs;
    }
}
exports.default = new Global();
