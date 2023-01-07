import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: { type: String, require: true },
  img: {
    type: String,
    default: process.env.INITIAL_IMAGE,
  },
  userInfo: {
    name: String,
    lastName: String,
    fone: String,
    cpf: String,
    address: String,
    number: Number,
    complement: String,
    birthDate: String,
    city: String,
    state: String,
    cep: String,
    email: String,
  },
  myOrders: [],
  buysUnderProcess: [],
  myBuys: [],
  melhorEnvioID: String,
  gatewayPagId: String,
  gatewayPagApiKey: String,
  wishList: [],
  favorites: [],
  likes: [],
  messages: [],
  cart: [],
  storeId: String,
  orders: Number,
  storeData: {},
  access: {
    type: Number,
    default: 0,
  },
  statistics: {
    productsViews: [String],
  },
  register: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.plugin(mongoosePaginate);

export type User = {
  _id?: ObjectId;
  username: string;
  password: string;
  wallet: string;
  img: string;
  userInfo: {
    name: string;
    lastName: string;
    fone: string;
    cpf: string;
    address: string;
    number: Number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
  };
  myOrders: string[];
  buysUnderProcess: string[];
  myBuys: string[];
  melhorEnvioID: string;
  gatewayPagId: string;
  gatewayPagApiKey: string;
  wishList: string[];
  favorites: string[];
  likes: string[];
  messages: string[];
  cart: string[];
  storeId: string;
  storeData: {};
  statistics: {
    productsViews: string[];
  };
  access: number;
  orders: number;
  register?: Date;
};
