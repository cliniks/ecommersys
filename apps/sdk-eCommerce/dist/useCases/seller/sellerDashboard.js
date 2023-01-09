"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerDashboard = void 0;
const sellerCategory_1 = require("./sellerCategory");
const sellerChat_1 = require("./sellerChat");
const sellerCheckout_1 = require("./sellerCheckout");
const sellerCoupon_1 = require("./sellerCoupon");
const sellerOrder_1 = require("./sellerOrder");
const sellerProducts_1 = require("./sellerProducts");
class sellerDashboard {
    constructor() {
        this.product = new sellerProducts_1.sellerProduct();
        this.order = new sellerOrder_1.sellerOrder();
        this.checkout = new sellerCheckout_1.sellerCheckout();
        this.coupon = new sellerCoupon_1.sellerCoupon();
        this.category = new sellerCategory_1.sellerCategory();
        this.chat = new sellerChat_1.sellerChat();
    }
}
exports.sellerDashboard = sellerDashboard;
