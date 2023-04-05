import FormData from "form-data";
import { MEApi } from "../../services/axiosInstance";
import {
  CalculateProps,
  IUserCheckoutMEProvider,
  clientProps,
} from "../interfaces/IUserCheckoutMEProvider";

export class UserCheckoutMEProvider implements IUserCheckoutMEProvider {
  constructor() {}

  // adicionar usuário
  async addClient(client: clientProps) {
    try {
      let form = new FormData();
      Object.keys(client).forEach((item) => {
        if (item === "address") {
          Object.keys(item).forEach((addressItem: any) => {
            form.append(item[addressItem], item[addressItem]);
          });
        }
        form.append(item, client[item as keyof clientProps]);
      });
      console.log("addClient", { form });
      const add = await MEApi.post("/api/v2/register", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(add.data);
      return add.data;
    } catch (err: any) {
      console.log("ME error addClient", err.response.data);
      throw new Error(err);
    }
  }
  // calculo de frete (produtos)
  async calculateShipping({ from, to, products }: CalculateProps) {
    try {
      const calculateResponse = await MEApi.post(
        "/api/v2/me/shipment/calculate",
        { from, to, products }
      );

      return calculateResponse.data;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
  // inserir fretes no carrinho
  async insertCartShipping({
    service,
    agency,
    from,
    to,
    products,
    volumes,
    options,
  }: any) {
    try {
      const insertCartResponse = await MEApi.post("/api/v2/me/cart", {
        service,
        agency,
        from,
        to,
        products,
        volumes,
        options,
      });

      return insertCartResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // listar carrinho de compras
  async listCart() {
    try {
      const listCartResponse = await MEApi.get("/api/v2/me/cart");

      return listCartResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Exibir informações de um item do carrinho
  async cartItemsInfo(orderID: string) {
    try {
      const cartInfoResponse = await MEApi.get(`/api/v2/me/cart/${orderID}`);

      return cartInfoResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Remoção de items do carrinho
  async removeCartItems(orderID: string) {
    try {
      const cartInfoResponse = await MEApi.delete(`/api/v2/me/cart/${orderID}`);

      return cartInfoResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  // Compra de fretes (Checkout)
  async buyShipping(orders: string) {
    try {
      const ordersResponse = await MEApi.post("/api/v2/me/shipment/checkout", {
        orders,
      });

      return ordersResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Busca dados do usuário admin do melhor envio
  async infoUser() {
    try {
      const infoUserResponse = await MEApi.get("/api/v2/me");

      return infoUserResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Pesquisa saldo da conta do usuário melhor envio
  async creditBalanceUser() {
    try {
      const creditBalanceResponse = await MEApi.get("/api/v2/me/balance");

      return creditBalanceResponse.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // Inserir crédito usuário
  async insertCreditUser() {
    // try {
    //   const creditBalanceResponse = await MEApi.get("/api/v2/me/balance");
    //   return creditBalanceResponse.data;
    // } catch (err) {
    //   throw new Error(err);
    // }
  }
}

export default new UserCheckoutMEProvider();
