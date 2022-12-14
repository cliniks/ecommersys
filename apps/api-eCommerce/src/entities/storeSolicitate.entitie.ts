import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const StoreSolicitateSchema = new Schema({
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
  owner: { type: String, required: true, unique: true },
  register: {
    type: Date,
    default: Date.now,
  },
});

export type StoreSolicitate = {
  name: string;
  storeInfo: {
    cnpj: String;
    address: String;
    number: Number;
    complement: String;
    city: String;
    state: String;
    cep: String;
    email: String;
  };
  owner: string;
  register: Date;
};

export type storeInfo = {
  cnpj: String;
  address: String;
  number: Number;
  complement: String;
  city: String;
  state: String;
  cep: String;
  email: String;
};
