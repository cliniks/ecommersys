"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const commission_1 = require("./commission");
const notifications_1 = require("./notifications");
class Admin {
    constructor() {
        this.commission = new commission_1.commission();
        this.notification = new notifications_1.AdminNotifications();
    }
    async getAllSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.getAllSellersSolicitation, props);
    }
    async getSingleSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.getSingleSellersSolicitation, props);
    }
    async confirmSellerSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.acceptSellerSolicitation, props);
    }
    async rejectSolicitation(props) {
        return await (0, utils_1.Try)(services_1.adminMutations.rejectSellerSolicitation, props);
    }
}
exports.default = new Admin();
