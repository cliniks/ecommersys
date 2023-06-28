export declare type Store = {
  valueFreshipping: number;
  limiteParcelas: number;
  valorParcelas: number;
} & {
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
export declare type wallet = {
  amount: number;
  history: [];
};
export declare type storeInfo = {
  cnpj: string;
  cnae: string;
  address: string;
  number: string;
  complement: string;
  cpf: string;
  birthDate: string;
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
export declare type statistics = {
  views: number;
  clients: string[];
};
