import fs from "fs";
import FormData from "form-data";
import {
  ISellerCheckoutMEProvider,
  generateTagPropsType,
} from "../interfaces/ISellerCheckoutMEProvider";
import { MEApi } from "../../services/axiosInstance";

export class SellerCheckoutMEProvider implements ISellerCheckoutMEProvider {
  constructor() {}
  // Pré visualização de etiquetas
  async addStore(orders: any) {
    try {
      const ordersResponse = await MEApi.post("/api/v2/me/shipment/preview", {
        orders,
      });
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Pré visualização de etiquetas
  async confirmPayment(orders: any) {
    try {
      const ordersResponse = await MEApi.post("/api/v2/me/shipment/preview", {
        orders,
      });
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Pré visualização de etiquetas
  async getAccount() {
    try {
      const ordersResponse = await MEApi.post(
        "/api/v2/me/shipment/preview",
        {}
      );
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Pré visualização de etiquetas
  async previewTags(orders: any) {
    try {
      const ordersResponse = await MEApi.post("/api/v2/me/shipment/preview", {
        orders,
      });
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Geração de etiquetas
  async generateTag(orders: generateTagPropsType) {
    try {
      const generateTagsResponse = await MEApi.post(
        "/api/v2/me/shipment/generate",
        { orders }
      );
      return generateTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Impressão de etiquetas
  async printTag(orders: string) {
    try {
      const generateTagsResponse = await MEApi.post(
        "/api/v2/me/shipment/print",
        { orders }
      );
      return generateTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Pesquisar etiqueta
  async searchTag(ID: string) {
    try {
      const searchTagsResponse = await MEApi.get(
        `/api/v2/me/orders/search?q=${ID}`
      );
      return searchTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Listar etiquetas
  async listTags(status: any) {
    try {
      const listTagsResponse = await MEApi.get(
        `/api/v2/me/orders?status=${status}`
      );
      return listTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Listar informações de uma etiqueta
  async infoTag(orderID: any) {
    try {
      const listTagsResponse = await MEApi.get(`/api/v2/me/orders/${orderID}`);
      return listTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Cancelamento de etiquetas
  async cancelTag(order: any) {
    try {
      const cancelTagResponse = await MEApi.post("/api/v2/me/shipment/cancel", {
        order,
      });
      return cancelTagResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Verificar se etiqueta pode ser cancelada
  async verifyTag(orders: any) {
    try {
      const generateTagsResponse = await MEApi.post(
        "/api/v2/me/shipment/cancellable",
        { orders }
      );
      return generateTagsResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async listStore() {
    try {
      const ordersResponse = await MEApi.get("/api/v2/me/companies");
      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Cadastra uma nova loja
  async registerStore(dataStore: any) {
    try {
      const registerStoreResponse = await MEApi.post(
        "/api/v2/me/companies",
        dataStore
      );
      return registerStoreResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Pré-visulização de dada de uma Store
  async previewStore(storeID: any) {
    try {
      const previewStoreResponse = await MEApi.get(
        `/api/v2/me/companies/${storeID}`
      );
      return previewStoreResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Salva endereço para uma Store
  async saveAddress(storeID: string, data: any) {
    try {
      const saveAddressResponse = await MEApi.post(
        `/api/v2/me/companies/${storeID}/addresses`,
        data
      );
      return saveAddressResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Lista endereçõs de Store
  async listAddress(storeID: any) {
    try {
      const listAddressResponse = await MEApi.get(
        `/api/v2/me/companies/${storeID}/addresses`
      );
      return listAddressResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Salva telefone de Store
  async savePhone(storeID: any, data: any) {
    try {
      const savePhoneResponse = await MEApi.post(
        `/api/v2/me/companies/${storeID}/phones`,
        data
      );
      return savePhoneResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Faz upload de imagem pra Store
  async uploadImageStore(storeID: any, file: any) {
    try {
      const form: any = new FormData();
      // const stream = fs.readFileSync(file.path);
      // const bufferToBase64 = Buffer.from(file.Buffer).toString("base64");
      form.append("file", fs.createReadStream(file.path));

      const uploadImageResponse = await MEApi.post(
        `/api/v2/me/companies/${storeID}/picture`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            ...form.getHeaders(),
          },
        }
      );

      return { uploadImageResponse };
      // return { bufferToBase64 };
    } catch (err: any) {
      console.log(err);

      const response = err.response;
      return response;
    }
  }
}

export default new SellerCheckoutMEProvider();
