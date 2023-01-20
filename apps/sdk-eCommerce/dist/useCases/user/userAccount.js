"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccount = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userAccount {
    async auth(props) {
        return (0, utils_1.Try)(services_1.authMutations.auth, props);
    }
    async createNewUser(data) {
        return await (0, utils_1.Try)(services_1.userMutations.createNewUser, data);
    }
    async getMyUser() {
        return await (0, utils_1.Try)(services_1.userMutations.getMyUser);
    }
    async updateUserInfo(props) {
        return await (0, utils_1.Try)(services_1.userMutations.updateUserInfo, props);
    }
    async updateUserImage(props) {
        return await (0, utils_1.Try)(services_1.userMutations.updateUserImage, props);
    }
    async solicitSeller() {
        return await (0, utils_1.Try)(services_1.sellerMutations.solicitation);
    }
}
exports.userAccount = userAccount;
