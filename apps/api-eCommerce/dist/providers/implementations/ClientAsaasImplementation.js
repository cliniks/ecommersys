"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAsaasImplementation = void 0;
const repositories_1 = require("../../repositories");
const axiosInstance_1 = require("../../services/axiosInstance");
const userRepo = repositories_1.UsersRepository;
class ClientAsaasImplementation {
    // add a client
    async newClient({ data }) {
        try {
            const { userInfo, _id } = data;
            const customerData = {
                name: userInfo.name,
                email: userInfo.email,
                phone: userInfo.phone,
                company: userInfo.enterpriseName,
                mobilePhone: userInfo.phone,
                cpfCnpj: userInfo.cnpj || userInfo.cpf,
                postalCode: userInfo.zipCode,
                address: userInfo.address,
                addressNumber: userInfo.number,
                complement: userInfo.complement,
                state: userInfo.state,
                province: userInfo.city,
                externalReference: _id,
                notificationDisabled: false,
                municipalInscription: userInfo.zipCode,
            };
            const addClient = await axiosInstance_1.AsassAPI.post("customers", customerData);
            console.log(addClient.data);
            const updateUser = await userRepo.update(`${_id}`, {
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
    // async genCharge({
    //   data,
    //   client,
    //   cartID,
    // }: {
    //   data: chargeType;
    //   client: User;
    //   cartID: string;
    // }): Promise<any> {
    //   try {
    //     const chargeConfig = {
    //       ...data,
    //       dueDate: new Date().toISOString(),
    //       description: "Pedido 056984",
    //       externalReference: cartID,
    //       customer: client.gatewayPagId,
    //     };
    //     const createCharge = await AsassAPI.post("payments", chargeConfig);
    //     await userRepo.update(`${client._id}`, {
    //       $push: { buysUnderProcess: createCharge.data.id },
    //     });
    //     return createCharge.data;
    //   } catch (err: any) {
    //     console.log(err.response.data);
    //     throw new Error(err);
    //   }
    // }
    async genCharge(charge) {
        try {
            const createCharge = await axiosInstance_1.AsassAPI.post("payments", charge);
            // await userRepo.update(`${client._id}`, {
            //   $push: { buysUnderProcess: createCharge.data.id },
            // });
            return createCharge.data;
        }
        catch (err) {
            console.log(err.toString());
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
            const calculateResponse = await axiosInstance_1.AsassAPI.get(`/payments/${id}/pixQrCode`);
            return calculateResponse.data;
        }
        catch (err) {
            console.log("genPixCode", err);
            throw new Error(err.toString());
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
    async tokenizeCard(cardData) {
        try {
            const calculateResponse = await axiosInstance_1.AsassAPI.post("creditCard/tokenize", cardData);
            return calculateResponse.data;
        }
        catch (err) {
            console.log(err.response.data);
            throw new Error(err);
        }
    }
}
exports.ClientAsaasImplementation = ClientAsaasImplementation;
