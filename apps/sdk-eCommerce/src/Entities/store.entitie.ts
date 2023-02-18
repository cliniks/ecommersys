export type Store = {
  _id?: string;
  name: string;
  wallet?: wallet;
  img?: string;
  banner?: string;
  segments?: [];
  storeInfo: storeInfo;
  melhorEnvioID?: string;
  asaasID?: string;
  asaasWalletId?: string;
  asaasApiKey?: string;
  owner: string;
  products?: string[];
  productsCount?: number;
  isActive: boolean;
  statistics?: statistics;
  openOrders?: [];
  salesHistory?: [];
  salesToSend?: [];
  messages?: [];
  tokenStripe?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type wallet = {
  amount: number;
  history: [];
};

export type storeInfo = {
  cnpj: string;
  cnae: string;
  address: string;
  number: string;
  complement: string;
  enterpriseSocial: string;
  enterpriseName: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  district: string;
  zipCode: string;
  email: string;
};

export type statistics = {
  views: number;
  clients: string[];
};
