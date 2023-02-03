"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerAccount = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class sellerAccount {
    async getMyStore() {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyStore);
    }
    async updateSellerInfo(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updateSellerInfo, props);
    }
    async getMyAddress(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyAddress, props);
    }
    async addAddress({ data, }) {
        return await (0, utils_1.Try)(services_1.sellerMutations.addAddress, data);
    }
    async updateAddress(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updateAddress, props);
    }
    async deleteAddress(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.deleteAddress, props);
    }
    async updateStoreInfo(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updateSellerInfo, props);
    }
    async updateStoreImage(formData) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updateStoreImage, formData);
    }
    async updateStoreBanner(formData) {
        return await (0, utils_1.Try)(services_1.sellerMutations.updateStoreBanner, formData);
    }
}
exports.sellerAccount = sellerAccount;
