import { Schema } from "mongoose";

export const AddressSchema = new Schema(
  {
    owner: String,
    address: String,
    number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export type Address = {
  _id?: string;
  owner: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt?: string;
  updatedAt?: string;
};
