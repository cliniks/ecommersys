import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const Checkout = new Schema(
  {
    owner: String,
    products: [
      {
        storeId: String,
        store: {},
        items: [],
        meValuePreview: String,
      },
    ],
    isActive: { type: Boolean, default: true },
    meId: String,
    asaasId: String,
  },
  {
    timestamps: true,
  }
);
Checkout.plugin(mongoosePaginate);

export type Checkout = {
  _id?: ObjectId;
  owner: String;
  products: Products[];
  isActive: boolean;
  meId: String;
  asaasId: String;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Products = {
  storeId: String;
  store: {};
  items: [];
  meValuePreview: String;
};
