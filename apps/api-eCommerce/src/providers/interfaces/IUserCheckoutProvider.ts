import { MECartProduct } from "../../entities/melhor-envio.entitie";

export interface IUserCheckoutProvider {
  // adicionar usuário
  addClient(client: clientProps): Promise<any>;
  // calculo de frete (produtos)
  calculateShipping({ from, to, products }: CalculateProps): Promise<any>;
  // inserir fretes no carrinho
  insertCartShipping({
    service,
    agency,
    from,
    to,
    products,
    volumes,
    options,
  }: InsetCartShippingProps): Promise<any>;
  // listar carrinho de compras
  listCart(): Promise<any>;
  // Exibir informações de um item do carrinho
  cartItemsInfo(orderID: string): Promise<any>;
  // Remoção de items do carrinho
  removeCartItems(orderID: string): Promise<any>;
  // Compra de fretes (Checkout)
  buyShipping(orders: string): Promise<any>;

  /** FUNCOES REFERENTE AO USUAIRO DONO DA CONTA MELHOR ENVIO */
  // Busca informações de usuário
  infoUser(): Promise<any>;
  // Verifica o saldo do usuário admin do melhor envio
  creditBalanceUser(): Promise<any>;
  // Adicionado crédito na carteira
  insertCreditUser(): Promise<any>;
}

export type clientProps = {
  firstname: string;
  lastname: string;
  document: string;
  birthdate: string;
  email: string;
  password: string;
  phone_mobile: string;
  phone_fixed: string;
  company: string;
  coupon?: string;
  terms?: string;
  address: {
    label: string;
    post_code: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state_abbr: /* A type. */ string;
    country: string;
  };
  commissioned?: string;
};

export type CalculateProps = {
  from: string;
  to: string;
  products?: MECartProduct[];
};

export type InsetCartShippingProps = {
  service: number;
  agency: number;
  from: string;
  to: string;
  products: string[];
  volumes: string[];
  options: string;
};
