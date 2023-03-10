"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerNotifications = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class sellerNotifications {
    // connectNotifications(): void {}
    // disableNotifications(): void {}
    mySellerNotifications() {
        return (0, utils_1.Try)(services_1.notifyMutations.getAllSellerNotify);
    }
}
exports.sellerNotifications = sellerNotifications;
