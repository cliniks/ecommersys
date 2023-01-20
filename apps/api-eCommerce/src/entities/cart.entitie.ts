import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CartSchema = new Schema(
  {
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
CartSchema.plugin(mongoosePaginate);

export type Cart = {
  _id?: ObjectId;
  buyer: string;
  isActive: boolean;
  productsInfo: ProductInfo[];
  createdAt?: Date;
  uodatedAt?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
