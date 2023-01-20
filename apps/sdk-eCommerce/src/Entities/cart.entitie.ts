export type Cart = {
  _id?: string;
  buyer: string;
  isActive?: boolean;
  productsInfo: ProductInfo[];
  createdAt?: Date;
  uodatedAt?: Date;
};

export type ProductInfo = {
  productId: string;
  amount: number;
  size: string;
};
