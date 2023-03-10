"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminNotifications = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class AdminNotifications {
    async getAll(props) {
        return await (0, utils_1.Try)(services_1.notifyMutations.getAllNotify, props);
    }
    async getSingle(props) {
        return await (0, utils_1.Try)(services_1.notifyMutations.getOneNotify, props);
    }
    async update(props) {
        return await (0, utils_1.Try)(services_1.notifyMutations.update, props);
    }
    async add(data) {
        return await (0, utils_1.Try)(services_1.notifyMutations.add, data);
    }
    async delete(data) {
        return await (0, utils_1.Try)(services_1.notifyMutations.delete, data);
    }
}
exports.AdminNotifications = AdminNotifications;
