import { ObjectId, Schema } from "mongoose";

export const WalletSchema = new Schema({
  owner: {
    type: String,
    require: true,
  },
  amount: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

export type Wallet = {
  _id?: ObjectId;
  owner: string;
  amount: string;
  register?: Date;
};
