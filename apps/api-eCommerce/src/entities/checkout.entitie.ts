import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const Checkout = new Schema({
  owner: String,
  products: [
    {
      storeId: String,
      store: {},
      items: [],
      meValuePreview: String,
    },
  ],
  meId: String,
  asaasId: String,
  register: {
    type: Date,
    default: Date.now,
  },
});
Checkout.plugin(mongoosePaginate);

export type Checkout = {
  _id?: ObjectId;
  owner: String;
  products: Products[];
  meId: String;
  asaasId: String;
  register?: Date;
};

export type Products = {
  storeId: String;
  store: {};
  items: [];
  meValuePreview: String;
};
