import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

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
WalletSchema.plugin(mongoosePaginate);

export type Wallet = {
  _id?: ObjectId;
  owner: string;
  amount: string;
  register?: Date;
};
