import { MEApi } from "../../services/axiosInstance";
import fs from "fs";
import { generateTagPropsType, ISellerCheckoutProvider } from "../ISellerCheckoutProvider";
import FormData from "form-data";
export class SellerCheckoutMEProvider implements ISellerCheckoutProvider {
  constructor() {}
  // Pré visualização de etiquetas
  async previewTags(orders) {
    try {
      const ordersResponse = await MEApi.post("/api/v2/me/shipment/preview", {
        orders,
      });
      return ordersResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Geração de etiquetas
  async generateTag(orders: generateTagPropsType) {
    try {
      const generateTagsResponse = await MEApi.post("/api/v2/me/shipment/generate", { orders });
      return generateTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Impressão de etiquetas
  async printTag(orders: string) {
    try {
      const generateTagsResponse = await MEApi.post("/api/v2/me/shipment/print", { orders });
      return generateTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Pesquisar etiqueta
  async searchTag(ID) {
    try {
      const searchTagsResponse = await MEApi.get(`/api/v2/me/orders/search?q=${ID}`);
      return searchTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Listar etiquetas
  async listTags(status) {
    try {
      const listTagsResponse = await MEApi.get(`/api/v2/me/orders?status=${status}`);
      return listTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Listar informações de uma etiqueta
  async infoTag(orderID) {
    try {
      const listTagsResponse = await MEApi.get(`/api/v2/me/orders/${orderID}`);
      return listTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Cancelamento de etiquetas
  async cancelTag(order) {
    try {
      const cancelTagResponse = await MEApi.post("/api/v2/me/shipment/cancel", {
        order,
      });
      return cancelTagResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Verificar se etiqueta pode ser cancelada
  async verifyTag(orders) {
    try {
      const generateTagsResponse = await MEApi.post("/api/v2/me/shipment/cancellable", { orders });
      return generateTagsResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async listStore() {
    try {
      const ordersResponse = await MEApi.get("/api/v2/me/companies");
      return ordersResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Cadastra uma nova loja
  async registerStore(dataStore) {
    try {
      const registerStoreResponse = await MEApi.post("/api/v2/me/companies", dataStore);
      return registerStoreResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  // Pré-visulização de dada de uma Store
  async previewStore(storeID) {
    try {
      const previewStoreResponse = await MEApi.get(`/api/v2/me/companies/${storeID}`);
      return previewStoreResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  // Salva endereço para uma Store
  async saveAddress(storeID, data) {
    try {
      const saveAddressResponse = await MEApi.post(`/api/v2/me/companies/${storeID}/addresses`, data);
      return saveAddressResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  // Lista endereçõs de Store
  async listAddress(storeID) {
    try {
      const listAddressResponse = await MEApi.get(`/api/v2/me/companies/${storeID}/addresses`);
      return listAddressResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  // Salva telefone de Store
  async savePhone(storeID, data) {
    try {
      const savePhoneResponse = await MEApi.post(`/api/v2/me/companies/${storeID}/phones`, data);
      return savePhoneResponse.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  // Faz upload de imagem pra Store
  async uploadImageStore(storeID, file) {
    try {
      const form: any = new FormData();
      const stream = fs.readFileSync(file.path);
      const bufferToBase64 = Buffer.from(file.Buffer).toString("base64");
      form.append("file", fs.createReadStream(file.path));

      const uploadImageResponse = await MEApi.post(`/api/v2/me/companies/${storeID}/picture`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...form.getHeaders(),
        },
      });

      return { uploadImageResponse };
      // return { bufferToBase64 };
    } catch (err) {
      console.log(err);

      const response = err.response;
      return response;
    }
  }
}
