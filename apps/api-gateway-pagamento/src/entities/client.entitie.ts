import { ObjectId } from "mongoose";

export type User = {
  _id: ObjectId;
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
    number: Number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
  };
  myOrders: [];
  myBuys: [];
  wishList: [];
  favorites: [];
  likes: [];
  messages: [];
  cart: [];
  storeId: string;
  storeData: {};
  access: number;
  register: Date;
};
