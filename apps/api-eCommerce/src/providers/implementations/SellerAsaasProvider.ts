// import { StoreModel } from "../../models/store.model";
import { SellersRepository } from "../../repositories";
import { AsassAPI } from "../../services/axiosInstance";
import { ISellerCheckoutProvider } from "../interfaces/ISellerCheckoutProvider";

const sellerRepo = SellersRepository;

export class SellerAsaasImplementation implements ISellerCheckoutProvider {
  constructor() {}
  async addStore(store: any) {
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

      const add = await AsassAPI.post("accounts", storeData);

      console.log(add?.data);

      sellerRepo.update(_id, {
        asaasID: add.data.id,
        asaasApiKey: add.data.apiKey,
        asaasWalletId: add.data.walletId,
      });

      return add?.data;
    } catch (err: any) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }
  // Pré visualização de etiquetas
  async confirmPayment(orders: string) {
    try {
      const ordersResponse = await AsassAPI.post("preview", { orders });
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Geração de etiquetas
  async getAccount() {
    try {
      return { msg: "essa funcao gera uma etiqueta" };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
