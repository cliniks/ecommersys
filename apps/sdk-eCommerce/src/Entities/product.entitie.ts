export type Product = {
  _id?: string;
  name: string;
  description: string;
  price: string;
  regularPrice: string;
  imgs: string[];
  partners: string[];
  virtualProduct: boolean;
  isActive: boolean;
  shippingInfo: {
    height: string;
    width: string;
    weight: string;
    length: string;
  };
  owner: string;
  discount: discountType[];
  status: boolean;
  categories: string[];
  statistics: {
    likes: number;
    likers: string[];
    views: number;
    favorite: number;
    favorites: string[];
    buys: number;
  };
  stockInfo: {
    qnt: number;
    sku: string;
    SoldIndividually: boolean;
  };
  tags: string[];
  hangTags: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type discountType = {
  key: string[];
  type: string;
  active: boolean;
  percentage: number;
};
