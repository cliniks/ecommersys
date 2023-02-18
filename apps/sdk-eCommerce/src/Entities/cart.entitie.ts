import { Product } from "./product.entitie";

export type Cart = {
  _id?: string;
  owner: string;
  isActive: boolean;
  products: ProductInfo[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
};

export type CartResponse = {
  _id?: string;
  owner: string;
  isActive: boolean;
  products: ProductsReturn[];
  totalPrice: number;
  totalDiscount: number;
  coupons: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductsReturn = ProductInfo & Product & { discountValue: number };
