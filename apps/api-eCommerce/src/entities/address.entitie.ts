import { Schema } from "mongoose";

export const AddressSchema = new Schema(
  {
    owner: String,
    address: String,
    number: Number,
    complement: String,
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
  owner: String;
  address: String;
  number: Number;
  complement: String;
  city: String;
  state: String;
  country: String;
  zipCode: String;
  createdAt: String;
  updatedAt: string;
};
