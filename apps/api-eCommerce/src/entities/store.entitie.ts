import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const StoreSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    wallet: {
      amount: { type: Number, default: 0 },
      history: [],
    },
    img: {
      type: String,
      default: process.env.INITIAL_IMAGE,
    },
    banner: {
      type: String,
      default: process.env.INITIAL_IMAGE,
    },
    segments: [],
    storeInfo: {
      cnpj: String,
      cnae: String,
      address: String,
      number: String,
      complement: String,
      enterpriseSocial: String,
      enterpriseName: String,
      phone: String,
      city: String,
      state: String,
      country: String,
      district: String,
      zipCode: String,
      email: String,
    },
    isActive: { type: Boolean, default: true },
    melhorEnvioID: String,
    asaasID: String,
    asaasWalletId: String,
    asaasApiKey: String,
    owner: { type: String, required: true, unique: true },
    products: [],
    productsCount: { type: Number, default: 0 },
    statistics: {
      views: { type: Number, default: 0 },
      clients: [],
    },
    openOrders: [],
    salesHistory: [],
    salesToSend: [],
    messages: [],
    tokenStripe: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
StoreSchema.plugin(mongoosePaginate);

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
