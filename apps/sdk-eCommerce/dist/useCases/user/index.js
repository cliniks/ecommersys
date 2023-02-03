"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const userAccount_1 = require("./userAccount");
const userCart_1 = require("./userCart");
const userCheckout_1 = require("./userCheckout");
const userDashboard_1 = require("./userDashboard");
const userDocuments_1 = require("./userDocuments");
const userOrder_1 = require("./userOrder");
const userProducts_1 = require("./userProducts");
__exportStar(require("./userAccount"), exports);
__exportStar(require("./userCart"), exports);
__exportStar(require("./userCheckout"), exports);
__exportStar(require("./userDashboard"), exports);
__exportStar(require("./userOrder"), exports);
__exportStar(require("./userProducts"), exports);
class User {
    constructor() {
        this.account = new userAccount_1.userAccount();
        this.dashboard = new userDashboard_1.userDashboard();
        this.product = new userProducts_1.userProduct();
        this.cart = new userCart_1.userCart();
        this.order = new userOrder_1.userOrder();
        this.checkout = new userCheckout_1.userCheckout();
        this.document = new userDocuments_1.userDocuments();
    }
}
exports.default = new User();
