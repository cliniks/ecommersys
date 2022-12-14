import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: {
    amount: { type: Number, default: 0 },
    history: [],
  },
  img: {
    type: String,
    default: process.env.INITIAL_IMAGE,
  },
  userInfo: {
    name: String,
    lastName: String,
    fone: String,
    cpf: String,
    birthdate: String,
    address: String,
    number: Number,
    complement: String,
    city: String,
    state: String,
    cep: String,
    email: String,
  },
  myOrders: [],
  buysUnderProcess: [],
  melhorEnvioID: String,
  gatewayPagId: String,
  myBuys: [],
  wishList: [],
  favorites: [],
  likes: [],
  messages: [],
  cart: [],
  storeId: String,
  storeData: {},
  access: {
    type: Number,
    default: 0,
  },
  register: {
    type: Date,
    default: Date.now,
  },
});

export type UserModelType = {
  _id?: string;
  username: string;
  password: string;
  wallet: {
    amount: number;
    history: [];
  };
  img: string;
  userInfo: {
    name: string;
    lastName: string;
    fone: string;
    cpf: string;
    address: string;
    number: number;
    birthdate: string;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
  };
  melhorEnvioID: string;
  gatewayPagId: string;
  myOrders: [];
  myBuys: [];
  buysUnderProcess: [];
  wishList: [];
  favorites: [];
  likes: [];
  messages: [];
  cart: [];
  storeId: String;
  storeData: {};
  access: number;
  register?: Date;
};

UserSchema.plugin(mongoosePaginate);
const UserModel = mongoose.model("user", UserSchema);
export { UserSchema, UserModel };
