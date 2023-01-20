import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const WalletHistorySchema = new Schema(
  {
    owner: {
      type: String,
      require: true,
    },
    isActive: { type: Boolean, default: true },
    description: String,
    in: Number,
    out: Number,
    orderId: String,
    transactionId: String,
    operator: String,
  },
  {
    timestamps: true,
  }
);
WalletHistorySchema.plugin(mongoosePaginate);

export type HistoryData = {
  _id?: ObjectId;
  owner: string;
  description: string;
  in?: number;
  out?: number;
  orderId?: string;
  transactionId?: string;
  isActive: boolean;
  operator: string;
  createdAt?: string;
  updateAt?: string;
};
