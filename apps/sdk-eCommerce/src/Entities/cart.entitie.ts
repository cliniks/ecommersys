export type Cart = {
  _id?: string;
  buyer: string;
  productsInfo: ProductInfo[];
  register?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
