import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    wallet: { type: String },
    img: {
      type: String,
      default: process.env.INITIAL_IMAGE,
    },
    isActive: { type: Boolean, default: true },
    userInfo: {
      name: String,
      lastName: String,
      personType: String,
      cpf: String,
      cnpj: String,
      cnae: String,
      enterpriseSocial: String,
      enterpriseName: String,
      district: String,
      address: String,
      number: String,
      phone: String,
      complement: String,
      birthDate: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
      email: String,
      defaultAddress: String,
    },
    melhorEnvioID: String,
    gatewayPagId: String,
    gatewayPagApiKey: String,
    wishList: [],
    favorites: [],
    likes: [],
    storeId: String,
    orders: Number,
    access: {
      type: Number,
      default: 0,
      enum: [0, 1, 2, 99],
    },
    statistics: {
      productsViews: [String],
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.plugin(mongoosePaginate);

export type User = {
  _id?: string;
  username: string;
  password: string;
  wallet: string;
  img: string;
  userInfo: userInfo;
  melhorEnvioID: string;
  gatewayPagId: string;
  gatewayPagApiKey: string;
  wishList: string[];
  favorites: string[];
  likes: string[];
  storeId: string;
  statistics: userStatistics;
  isActive: boolean;
  access: 0 | 1 | 2 | 99;
  orders: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type userInfo = {
  name: string;
  lastName: string;
  cpf: string;
  cnpj: string;
  cnae: string;
  personType: "juridica" | "fisica";
  enterpriseSocial: string;
  enterpriseName: string;
  district: string;
  address: string;
  number: string;
  phone: string;
  complement: string;
  birthDate: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  defaultAddress: string;
};

export type userStatistics = {
  productsViews: string[];
};
