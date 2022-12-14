import { ObjectId, Schema } from "mongoose";

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  value: String,
  img: [String],
  partners: [String],
  qnt: Number,
  sizes: [
    {
      qnt: Number,
      sizeType: String,
    },
  ],
  height: String,
  width: String,
  weight: String,
  owner: String,
  ownerData: {},
  likes: Number,
  likers: [String],
  favorites: [String],
  discount: [
    {
      key: [String],
      type: String,
      active: Boolean,
      percentage: Number,
    },
  ],
  status: Boolean,
  group: [String],
  subgroup: [String],
  statistics: {
    views: Number,
    buyeds: Number,
  },
  register: Date,
});

export type Product = {
  _id?: ObjectId;
  name: string;
  description: string;
  value: string;
  img: [];
  partners: string[];
  qnt: number;
  sizes: sizesType[];
  height: string;
  width: string;
  weight: string;
  owner: string;
  ownerData: {};
  likes: number;
  likers: string[];
  favorites: string[];
  discount: discountType[];
  status: boolean;
  group: [];
  subgroup: [];
  statistics: {
    views: number;
    buyeds: number;
  };
  register?: Date;
};

export type sizesType = {
  qnt: number;
  sizeType: string;
};

export type discountType = {
  key: string[];
  type: string;
  active: boolean;
  percentage: number;
};
