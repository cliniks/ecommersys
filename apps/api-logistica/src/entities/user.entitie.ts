import { ObjectId } from "mongoose";

export type User = {
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
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
  };
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
  register: Date;
};
