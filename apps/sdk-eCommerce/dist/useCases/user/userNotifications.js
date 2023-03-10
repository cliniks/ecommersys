"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNotifications = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userNotifications {
    myUserNotifications() {
        return (0, utils_1.Try)(services_1.notifyMutations.getAllUserNotify);
    }
}
exports.userNotifications = userNotifications;
