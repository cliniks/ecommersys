import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: String,
    regularPrice: String,
    virtualProduct: Boolean,
    imgs: [String],
    partners: [String],
    isActive: { type: Boolean, default: true },
    shippingInfo: {
      height: String,
      width: String,
      length: String,
      weight: String,
    },
    owner: String,
    discount: [
      {
        key: [String],
        type: String,
        active: Boolean,
        percentage: Number,
      },
    ],
    status: Boolean,
    categories: [String],
    statistics: {
      likes: Number,
      likers: [String],
      views: Number,
      favorite: Number,
      favorites: [String],
      buys: Number,
    },
    stockInfo: {
      qnt: Number,
      sku: String,
      SoldIndividually: Boolean,
    },
    tags: [String],
    hangTags: [String],
  },
  {
    timestamps: true,
  }
);
ProductSchema.plugin(mongoosePaginate);

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
  categories: [];
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
