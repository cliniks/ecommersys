"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerAsaasImplementation = void 0;
// import { StoreModel } from "../../models/store.model";
const user_model_1 = require("../../models/user.model");
const axiosInstance_1 = require("../../services/axiosInstance");
class SellerAsaasImplementation {
    constructor() { }
    async addStore(store) {
        try {
            const { name, storeInfo, _id, owner } = store;
            const getUser = await user_model_1.UserModel.findById(owner);
            const storeData = {
                name: name,
                email: storeInfo.email,
                mobilePhone: getUser.userInfo.fone,
                cpfCnpj: storeInfo.cnpj,
                companyType: "MEI",
                birthDate: null,
                postalCode: storeInfo.cep,
                address: storeInfo.address,
                addressNumber: storeInfo.number,
                complement: storeInfo.complement,
                province: storeInfo.city,
                externalReference: _id,
                notificationDisabled: false,
                municipalInscription: storeInfo.cep,
            };
            const add = await axiosInstance_1.AsassAPI.post("accounts", storeData);
            return add.data;
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
