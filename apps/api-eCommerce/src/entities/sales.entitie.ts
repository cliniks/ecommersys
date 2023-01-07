import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const SalesSchema = new Schema({
  seller: String,
  buyer: String,
  productsInfo: [
    {
      productId: String,
      amount: Number,
      size: String,
    },
  ],
  register: {
    type: Date,
    default: Date.now,
  },
});
SalesSchema.plugin(mongoosePaginate);

export type Sales = {
  _id?: ObjectId;
  seller: string;
  buyer: string;
  productsInfo: ProductInfo[];
  register?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
