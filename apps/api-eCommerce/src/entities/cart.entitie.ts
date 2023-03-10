import { Schema } from "mongoose";
import { Product } from "./product.entitie";

export const CartSchema = new Schema(
  {
    owner: String,
    products: [],
    coupons: [String],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export type Cart = {
  _id?: string;
  owner: string;
  isActive: boolean;
  products: ProductInfo[];
  coupons: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
};

export type CartReturn = {
  _id?: string;
  owner: string;
  isActive: boolean;
  products: ProductsReturn[];
  coupons: string[];
  totalPrice: number;
  totalDiscount: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductsReturn = ProductInfo &
  Partial<Product> & {
    discountValue: string;
    couponApplied: string;
    totalValue: string;
  };
