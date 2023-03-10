"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = require("../../logs");
const categories_1 = require("./categories");
const emailSender_1 = require("./emailSender");
const notifications_1 = require("./notifications");
const products_1 = require("./products");
const sellers_1 = require("./sellers");
const uploads_1 = require("./uploads");
class Global {
    constructor() {
        this.products = new products_1.GlobalProducts();
        this.categories = new categories_1.GlobalCategories();
        this.sellers = new sellers_1.GlobalSellers();
        this.emailSender = new emailSender_1.GlobalEmailSender();
        this.uploads = new uploads_1.GlobalUploads();
        this.notifications = new notifications_1.GlobalNotifications();
        this.logs = logs_1.Logs;
    }
}
exports.default = new Global();
