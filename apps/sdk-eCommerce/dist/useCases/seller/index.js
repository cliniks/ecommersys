"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sellerAccount_1 = require("./sellerAccount");
const sellerDashboard_1 = require("./sellerDashboard");
const sellerNotifications_1 = require("./sellerNotifications");
class Seller {
    constructor() {
        this.store = new sellerAccount_1.sellerAccount();
        this.dashboard = new sellerDashboard_1.sellerDashboard();
        this.notifications = new sellerNotifications_1.sellerNotifications();
    }
}
exports.default = new Seller();
