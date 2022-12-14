import { ObjectId } from "mongoose";

export type Product = {
  _id: ObjectId;
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
  discount: discountType;
  status: boolean;
  group: [];
  subgroup: [];
  statistics: {
    views: number;
    buyeds: number;
  };
  register: Date;
};

export type sizesType = {
  qnt: number;
  sizeType: string;
};

export type discountType = {
  active: boolean;
  percentage: number;
};
