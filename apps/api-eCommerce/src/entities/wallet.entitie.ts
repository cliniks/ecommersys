import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const WalletSchema = new Schema(
  {
    owner: {
      type: String,
      require: true,
    },
    isActive: { type: Boolean, default: true },
    amount: String,
  },
  {
    timestamps: true,
  }
);
WalletSchema.plugin(mongoosePaginate);

export type Wallet = {
  _id?: string;
  owner: string;
  amount: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
