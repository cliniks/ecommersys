import { UserModel, UserModelType } from "../../models/user.model";
import { AsassAPI } from "../../services/axiosInstance";
import {
  chargeType,
  clientProps,
  creditCardChargeType,
  queryProps,
} from "../IClientAsaasProvider";

export class ClientAsaasImplementation {
  constructor() {}
  // add a client
  async newClient({ data }: { data: UserModelType }) {
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
      const addClient = await AsassAPI.post("customers", customerData);
      console.log();
      const updateUser = await UserModel.findByIdAndUpdate(_id, {
        gatewayPagId: addClient.data.id,
      });
      return updateUser;
    } catch (err: any) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }
  // update a client
  async updateClient({
    data,
    clientId,
  }: {
    data: clientProps;
    clientId: string;
  }): Promise<any> {
    try {
      console.log(clientId);
      const calculateResponse = await AsassAPI.post("customers", data);
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // return clients
  async listClients({ queryProps }: { queryProps: queryProps }): Promise<any> {
    try {
      const calculateResponse = await AsassAPI.post("customers", {
        params: { query: queryProps },
      });
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // return one client
  async getClient({ clientId }: { clientId: string }): Promise<any> {
    try {
      const calculateResponse = await AsassAPI.post(`customers/${clientId}`);
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // generate a charge
  async genCharge({
    data,
    client,
    cartID,
  }: {
    data: chargeType;
    client: UserModelType;
    cartID: string;
  }): Promise<any> {
    try {
      const chargeConfig = {
        ...data,
        dueDate: new Date().toISOString(),
        description: "Pedido 056984",
        externalReference: cartID,
        customer: client.gatewayPagId,
      };
      const createCharge = await AsassAPI.post("payments", chargeConfig);
      await UserModel.updateOne(
        { _id: client._id },
        { $push: { buysUnderProcess: createCharge.data.id } }
      );
      return createCharge.data;
    } catch (err: any) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }
  // get a charge
  async getCharge({
    client,
    chargeId,
  }: {
    client: UserModelType;
    chargeId: string;
  }): Promise<any> {
    try {
      console.log(client);
      const getCharge = await AsassAPI.get(`payments/${chargeId}`);
      return getCharge.data;
    } catch (err: any) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }
  // generate a credicard charge
  async genCreditCardCharge({
    data,
    creditcard,
  }: {
    data: chargeType;
    creditcard: creditCardChargeType;
  }): Promise<any> {
    try {
      console.log(creditcard);
      const calculateResponse = await AsassAPI.post("customers", data);
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // generate a pix code
  async genPixCode({ id }: { id: string }): Promise<any> {
    try {
      console.log(id);
      const calculateResponse = await AsassAPI.post("customers");
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  } // Ao gerar uma cobrança com as formas de pagamento "PIX", "BOLETO" ou "UNDEFINED" o pagamento via Pix é habilitado.
  // adicionar banco para recebimento
  async registerBank(): Promise<any> {
    try {
      const calculateResponse = await AsassAPI.post("customers");
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // adicionar pix para recebimento
  async registerPixCode(): Promise<any> {
    try {
      const calculateResponse = await AsassAPI.post("customers");
      return calculateResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
