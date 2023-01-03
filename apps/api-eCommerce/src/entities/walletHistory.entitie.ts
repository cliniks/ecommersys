import { ObjectId, Schema } from "mongoose";

export const WalletHistorySchema = new Schema({
  owner: {
    type: String,
    require: true,
  },
  description: String,
  in: Number,
  out: Number,
  orderId: String,
  transactionId: String,
  operator: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

export type HistoryData = {
  _id?: ObjectId;
  owner: string;
  description: string;
  in?: number;
  out?: number;
  orderId?: string;
  transactionId?: string;
  // Usuário responsável pela movimentação
  operator: string;
};
