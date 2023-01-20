"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAsaasImplementation = void 0;
const user_model_1 = require("../../models/user.model");
const axiosInstance_1 = require("../../services/axiosInstance");
class ClientAsaasImplementation {
    constructor() { }
    // add a client
    async newClient({ data }) {
        try {
            const { userInfo, _id } = data;
            const customerData = {
                name: userInfo.name,
                email: userInfo.email,
                mobilePhone: userInfo.fone,
                cpfCnpj: userInfo.cpf,
                postalCode: userInfo.cep,
                address: userInfo.address,
                addressNumber: userInfo.number,
                complement: userInfo.complement,
                province: userInfo.city,
                externalReference: _id,
                notificationDisabled: false,
                municipalInscription: userInfo.cep,
            };
            const addClient = await axiosInstance_1.AsassAPI.post("customers", customerData);
            console.log();
            const updateUser = await user_model_1.UserModel.findByIdAndUpdate(_id, {
                gatewayPagId: addClient.data.id,
            });
            return updateUser;
        }
        catch (err) {
            console.log(err.response.data);
            throw new Error(err);
        }
    }
    // update a client
    async updateClient({ data, clientId, }) {
        try {
            console.log(clientId);
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers", data);
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // return clients
    async listClients({ queryProps }) {
        try {
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers", {
                params: { query: queryProps },
            });
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // return one client
    async getClient({ clientId }) {
        try {
            const calculateResponse = await axiosInstance_1.AsassAPI.post(`customers/${clientId}`);
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // generate a charge
    async genCharge({ data, client, cartID, }) {
        try {
            const chargeConfig = Object.assign(Object.assign({}, data), { dueDate: new Date().toISOString(), description: "Pedido 056984", externalReference: cartID, customer: client.gatewayPagId });
            const createCharge = await axiosInstance_1.AsassAPI.post("payments", chargeConfig);
            await user_model_1.UserModel.updateOne({ _id: client._id }, { $push: { buysUnderProcess: createCharge.data.id } });
            return createCharge.data;
        }
        catch (err) {
            console.log(err.response.data);
            throw new Error(err);
        }
    }
    // get a charge
    async getCharge({ client, chargeId, }) {
        try {
            console.log(client);
            const getCharge = await axiosInstance_1.AsassAPI.get(`payments/${chargeId}`);
            return getCharge.data;
        }
        catch (err) {
            console.log(err.response.data);
            throw new Error(err);
        }
    }
    // generate a credicard charge
    async genCreditCardCharge({ data, creditcard, }) {
        try {
            console.log(creditcard);
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers", data);
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // generate a pix code
    async genPixCode({ id }) {
        try {
            console.log(id);
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers");
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    } // Ao gerar uma cobrança com as formas de pagamento "PIX", "BOLETO" ou "UNDEFINED" o pagamento via Pix é habilitado.
    // adicionar banco para recebimento
    async registerBank() {
        try {
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers");
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    // adicionar pix para recebimento
    async registerPixCode() {
        try {
            const calculateResponse = await axiosInstance_1.AsassAPI.post("customers");
            return calculateResponse.data;
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
exports.ClientAsaasImplementation = ClientAsaasImplementation;
