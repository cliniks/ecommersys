import { ObjectId, Schema } from "mongoose";

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
