"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalNotifications = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
class GlobalNotifications {
    async getAll(props) {
        return await (0, utils_1.Try)(services_1.notifyMutations.getAllNotify, props);
    }
    async readNotification(id) {
        return await (0, utils_1.Try)(services_1.notifyMutations.readNotification, id);
    }
}
exports.GlobalNotifications = GlobalNotifications;
