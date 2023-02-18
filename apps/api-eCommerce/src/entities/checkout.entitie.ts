import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const Checkout = new Schema(
  {
    owner: String,
    coupons: [String],
    address: {
      district: String,
      address: String,
      number: String,
      complement: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },
    store: [
      {
        storeId: String,
        products: [
          {
            productId: String,
            qnt: Number,
            value: String,
            discount: String,
          },
        ],
        meValuePreview: String,
        value: String,
        discount: String,
      },
    ],
    totalValue: String,
    totalDiscount: String,
    paymentMethods: [
      { paymentType: String, paymentMethodId: String, value: String },
    ],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

Checkout.plugin(mongoosePaginate);

export type Checkout = {
  _id?: string;
  owner: string;
  products: CheckoutProducts[];
  isActive: boolean;
  address: {
    district: string;
    address: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  paymentMethods: CheckoutPaymentMethods[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type CheckoutPaymentMethods = {
  paymentType: string;
  value: string;
  paymentMethodId: string;
};

export type CheckoutStore = {
  storeId: string;
  products: CheckoutProducts[];
  meValuePreview?: string;
  value?: String;
  discount?: String;
};

export type CheckoutProducts = {
  productId: string;
  qnt: number;
  value?: String;
  discount?: String;
};
