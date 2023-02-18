import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import { User } from "./user.entitie";
import { storeInfo } from "./store.entitie";

export const StoreSolicitateSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
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
    owner: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

StoreSolicitateSchema.plugin(mongoosePaginate);

export type StoreSolicitate = {
  _id?: string;
  name: string;
  storeInfo: storeInfo;
  owner: string | User;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
