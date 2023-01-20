import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const SalesSchema = new Schema(
  {
    seller: String,
    buyer: String,
    productsInfo: [
      {
        productId: String,
        amount: Number,
        size: String,
      },
    ],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
SalesSchema.plugin(mongoosePaginate);

export type Sales = {
  _id?: ObjectId;
  seller: string;
  buyer: string;
  isActive: boolean;
  productsInfo: ProductInfo[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
