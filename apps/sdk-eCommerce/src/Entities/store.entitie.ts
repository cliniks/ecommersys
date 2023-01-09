export type Store = {
  _id?: string;
  name: string;
  wallet?: wallet;
  img?: string;
  segments?: [];
  storeInfo: storeInfo;
  melhorEnvioID?: string;
  asaasID?: string;
  asaasApiKey?: string;
  owner: string;
  products?: string[];
  productsCount?: number;
  statistics?: statistics;
  openOrders?: [];
  salesHistory?: [];
  salesToSend?: [];
  messages?: [];
  tokenStripe?: string;
  register?: Date;
};

export type wallet = {
  amount: number;
  history: [];
};

export type storeInfo = {
  cnpj: string;
  address: string;
  number: number;
  complement: string;
  city: string;
  state: string;
  cep: string;
  email: string;
};

export type statistics = {
  views: number;
  clients: string[];
};
