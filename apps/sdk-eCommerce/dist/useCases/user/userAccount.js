"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccount = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userAccount {
    async auth(props) {
        return (0, utils_1.Try)(services_1.authMutations.auth, props);
    }
    async verifyToken(token) {
        return (0, utils_1.Try)(services_1.authMutations.verifyToken, token);
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
    async getMyAddress(props) {
        return await (0, utils_1.Try)(services_1.userMutations.getMyAddress, props);
    }
    async addAddress(address) {
        return await (0, utils_1.Try)(services_1.userMutations.addAddress, address);
    }
    async setDefaultAddress(addressId) {
        return await (0, utils_1.Try)(services_1.userMutations.setDefaultAddress, addressId);
    }
    async updateAddress(props) {
        return await (0, utils_1.Try)(services_1.userMutations.updateAddress, props);
    }
    async deleteAddress(props) {
        return await (0, utils_1.Try)(services_1.userMutations.deleteAddress, props);
    }
    async updateUserImage(props) {
        return await (0, utils_1.Try)(services_1.userMutations.updateUserImage, props);
    }
    async solicitSeller(data) {
        return await (0, utils_1.Try)(services_1.userMutations.sellerSolicitation, data);
    }
    async verifySolicitation(id) {
        return await (0, utils_1.Try)(services_1.userMutations.verifySolicitation, id);
    }
}
exports.userAccount = userAccount;
