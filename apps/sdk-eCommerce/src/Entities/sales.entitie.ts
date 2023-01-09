import { ProductInfo } from "./cart.entitie";

export type Sales = {
  _id?: string;
  seller: string;
  buyer: string;
  productsInfo: ProductInfo[];
  register?: Date;
};
