import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import { storeInfo } from "./store.entitie";

export const StoreSolicitateSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
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
    isActive: { type: Boolean, default: true },
    owner: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
StoreSolicitateSchema.plugin(mongoosePaginate);

export type StoreSolicitate = {
  name: string;
  storeInfo: storeInfo;
  isActive: boolean;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
};
