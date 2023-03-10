"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerAsaasImplementation = void 0;
// import { StoreModel } from "../../models/store.model";
const repositories_1 = require("../../repositories");
const axiosInstance_1 = require("../../services/axiosInstance");
const sellerRepo = repositories_1.SellersRepository;
class SellerAsaasImplementation {
    constructor() { }
    async addStore(store) {
        try {
            const { name, storeInfo, _id } = store;
            const storeData = {
                name: name,
                email: storeInfo.email,
                mobilePhone: storeInfo.phone,
                phone: storeInfo.phone,
                cpfCnpj: storeInfo.cnpj,
                companyType: "MEI",
                postalCode: storeInfo.zipCode,
                address: storeInfo.address,
                addressNumber: storeInfo.number,
                complement: storeInfo.complement,
                province: storeInfo.city,
                externalReference: _id,
                notificationDisabled: false,
                municipalInscription: storeInfo.zipCode,
            };
            const add = await axiosInstance_1.AsassAPI.post("accounts", storeData);
            console.log(add === null || add === void 0 ? void 0 : add.data);
            sellerRepo.update(_id, {
                asaasID: add.data.id,
                asaasApiKey: add.data.apiKey,
                asaasWalletId: add.data.walletId,
            });
            return add === null || add === void 0 ? void 0 : add.data;
        }
        catch (err) {
            console.log(err.response.data);
            throw new Error(err);
        }
    }
    // Pré visualização de etiquetas
    async confirmPayment(orders) {
        try {
            const ordersResponse = await axiosInstance_1.AsassAPI.post("preview", { orders });
            return ordersResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // Geração de etiquetas
    async getAccount() {
        try {
            return { msg: "essa funcao gera uma etiqueta" };
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
exports.SellerAsaasImplementation = SellerAsaasImplementation;
