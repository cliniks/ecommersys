// import { StoreModel } from "../../models/store.model";
import { UserModel } from "../../models/user.model";
import { Api, AsassAPI } from "../../services/axiosInstance";
import { ISellerCheckoutProvider } from "../ISellerCheckoutProvider";
export class SellerAsaasImplementation implements ISellerCheckoutProvider {
  constructor() {}
  async addStore(store: any) {
    try {
      const { name, storeInfo, _id, owner } = store;
      const getUser: any = await UserModel.findById(owner);
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
      const add = await AsassAPI.post("accounts", storeData);
      return add.data;
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
