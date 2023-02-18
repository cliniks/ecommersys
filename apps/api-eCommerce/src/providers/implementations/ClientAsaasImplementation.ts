import { User } from "../../entities";
import { TokenCard, tokenizeType } from "../../entities/paymentMethod.entitie";
import { UsersRepository } from "../../repositories";
import { AsassAPI } from "../../services/axiosInstance";
import {
  chargeType,
  clientProps,
  creditCardChargeType,
  queryProps,
} from "../interfaces/IClientAsaasProvider";

const userRepo = UsersRepository;

export class ClientAsaasImplementation {
  // add a client
  async newClient({ data }: { data: User }) {
    try {
      const { userInfo, _id } = data;

      const customerData = {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        company: userInfo.enterpriseName,
        mobilePhone: userInfo.phone,
        cpfCnpj: userInfo.cnpj,
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

      const addClient = await AsassAPI.post("customers", customerData);

      console.log(addClient.data);

      const updateUser = await userRepo.update(`${_id}`, {
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
  async genCharge(charge: any): Promise<any> {
    try {
      const createCharge = await AsassAPI.post("payments", charge);
      // await userRepo.update(`${client._id}`, {
      //   $push: { buysUnderProcess: createCharge.data.id },
      // });
      return createCharge.data;
    } catch (err: any) {
      console.log(err.toString());
      console.log(err.response.data);
      throw new Error(err);
    }
  }
  // get a charge
  async getCharge({
    client,
    chargeId,
  }: {
    client: User;
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
      const calculateResponse = await AsassAPI.get(`/payments/${id}/pixQrCode`);
      return calculateResponse.data;
    } catch (err: any) {
      console.log("genPixCode", err);
      throw new Error(err.toString());
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

  async tokenizeCard(cardData: tokenizeType): Promise<TokenCard> {
    try {
      const calculateResponse = await AsassAPI.post(
        "creditCard/tokenize",
        cardData
      );
      return calculateResponse.data;
    } catch (err: any) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }
}
