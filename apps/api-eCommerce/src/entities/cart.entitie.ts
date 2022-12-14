import { ObjectId, Schema } from "mongoose";

export const CartSchema = new Schema({
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

export type Cart = {
  _id?: ObjectId;
  buyer: string;
  productsInfo: ProductInfo[];
  register?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
