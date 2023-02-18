import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const appSchema = new Schema(
  {
    tokens: {
      appToken: String,
      devAppToken: String,
    },
    username: String,
    password: String,
    appInfo: {
      name: String,
      cnpj: String,
      address: String,
      number: Number,
      complement: String,
      city: String,
      state: String,
      cep: String,
      email: String,
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

appSchema.plugin(mongoosePaginate);

export type App = {
  _id?: string;
  tokens: Tokens;
  appInfo: AppInfo;
  username: string;
  isActive: boolean;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Tokens = {
  appToken: string;
  devAppToken: string;
};

export type AppInfo = {
  name: string;
  cnpj: string;
  address: string;
  number: number;
  complement: string;
  city: string;
  state: string;
  cep: string;
  email: string;
};
