import { Request, Response } from "express";
import {
  CalculateProps,
  IUserCheckoutMEProvider,
  InsetCartShippingProps,
} from "../../../providers/interfaces/IUserCheckoutMEProvider";
import { UserCheckoutMEProvider } from "../../../providers/implementations/UserCheckoutMEProvider";

const MeUserProvider = new UserCheckoutMEProvider();

export const UserUseCases = {
  async addClient(req: Request, res: Response) {
    try {
      const { userInfo, password } = req.body;
      const obj = {
        firstname: userInfo.name,
        lastname: userInfo.lastName,
        document: userInfo.cpf,
        birthdate: userInfo.birthDate,
        email: userInfo.email,
        password: password,
        phone_mobile: userInfo.phone,
        phone_fixed: userInfo.phone,
        company: userInfo.name,
        terms: "1",
        address: {
          label: "home",
          post_code: userInfo.cep,
          address: userInfo.address,
          number: userInfo.number,
          complement: userInfo.complement,
          district: userInfo.state,
          city: userInfo.state,
          state_abbr: "BR",
          country: userInfo.state,
        },
      };
      const addClient = await MeUserProvider.addClient(obj);
      res.json(addClient);
    } catch (err) {
      console.log("ME error addClient", err);
      res.status(400).send({ err });
    }
  },
  // calculo de frete (produtos)
  async calculateShipping({ from, to, products }: CalculateProps) {
    const calculateShipping = await MeUserProvider.calculateShipping({
      from,
      to,
      products,
    });
    return calculateShipping;
  },
  // inserir fretes no carrinho
  async insertCartShipping(req: Request, res: Response) {
    try {
      const {
        service,
        agency,
        from,
        to,
        products,
        volumes,
        options,
      }: InsetCartShippingProps | any = req.body;

      const insertCartShipping = await MeUserProvider.insertCartShipping({
        service,
        agency,
        from,
        to,
        products,
        volumes,
        options,
      });
      res.json(insertCartShipping);
    } catch (err) {
      res.status(400).send({ err });
    }
  },
  // listar carrinho de compras
  async listCart(req: Request, res: Response) {
    try {
      const listCart = await MeUserProvider.listCart();
      res.json(listCart);
    } catch (err) {
      console.log(err);
      res.status(400).send({ err });
    }
  },
  // Exibir informações de um item do carrinho
  async cartItemsInfo(req: Request, res: Response) {
    try {
      const { orderID }: any = req.params;

      const cartItemsInfo = await MeUserProvider.cartItemsInfo(orderID);
      res.json(cartItemsInfo);
    } catch (err) {
      res.status(400).send({ err });
    }
  },
  // Remoção de items do carrinho
  async removeCartItems(req: Request, res: Response) {
    try {
      const { orderID }: any = req.params;

      const removeCartItems = await MeUserProvider.removeCartItems(orderID);
      res.json(removeCartItems);
    } catch (err) {
      res.status(400).send({ err });
    }
  },
  // Compra de fretes (Checkout)
  async buyShipping(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const buyShipping = await MeUserProvider.buyShipping(orders);
      res.json(buyShipping);
    } catch (err) {
      res.status(400).send({ err });
    }
  },

  // Busca informações de usuário
  async infoUser(req: Request, res: Response) {
    try {
      const responseInfoUser = await MeUserProvider.infoUser();
      res.json(responseInfoUser);
    } catch (err) {
      res.status(400).send({ err });
    }
  },

  // Consulta saldo do usuário
  async creditBalanceUser(req: Request, res: Response) {
    try {
      const responseCreditBalanceUser =
        await MeUserProvider.creditBalanceUser();
      res.json(responseCreditBalanceUser);
    } catch (err) {
      console.log(err);

      res.status(400).send({ err });
    }
  },
  // Adicionado crédito na carteira
  async inserCreditUser(req: Request, res: Response) {
    try {
      const responseInserCreditUser = await MeUserProvider.insertCreditUser();
      res.json(responseInserCreditUser);
    } catch (err) {
      res.status(400).send({ err });
    }
  },
};
