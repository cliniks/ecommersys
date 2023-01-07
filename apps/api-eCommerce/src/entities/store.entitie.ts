import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const StoreSchema = new Schema({
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
    address: String,
    number: Number,
    complement: String,
    city: String,
    state: String,
    cep: String,
    email: String,
  },
  melhorEnvioID: String,
  asaasID: String,
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
  register: {
    type: Date,
    default: Date.now,
  },
});
StoreSchema.plugin(mongoosePaginate);

export type Store = {
  _id?: ObjectId;
  name: string;
  wallet?: wallet;
  img?: string;
  banner?: string;
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
