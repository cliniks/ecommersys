import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: String,
  virtualProduct: Boolean,
  imgs: [String],
  partners: [String],
  shippingInfo: {
    height: String,
    width: String,
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
  register: { type: Date, default: new Date() },
});
ProductSchema.plugin(mongoosePaginate);

export type Product = {
  _id?: ObjectId;
  name: string;
  description: string;
  price: string;
  imgs: string[];
  partners: string[];
  virtualProduct: boolean;
  shippingInfo: {
    height: String;
    width: String;
    weight: String;
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
  register?: Date;
};

export type discountType = {
  key: string[];
  type: string;
  active: boolean;
  percentage: number;
};
