import { Schema } from "mongoose";

export const OrderSchema = new Schema({
  userId: String,
  userName: String,
  storeId: String,
  storeName: String,
  totalValue: String,
  totalDiscount: String,
  coupons: [String],
  meLogs: [],
  shippingStatus: { type: String, enum: [""] },
  shipping: {
    configs: {
      name: String,
      currency: String,
      company: { id: Number, name: String, picture: String },
      additional_services: {
        receipt: Boolean,
        own_hand: Boolean,
        collect: Boolean,
      },
    },
    estimated: {
      custom_delivery_range: { min: Number, max: Number },
      custom_delivery_time: Number,
      custom_price: String,
      delivery_range: { min: Number, max: Number },
      delivery_time: Number,
    },
    packages: [
      {
        dimensions: { height: Number, width: Number, length: Number },
        discount: String,
        format: String,
        insurance_value: String,
        price: String,
        products: [{ id: String, quantity: Number }],
        weight: String,
      },
    ],
  },
  products: [
    {
      amount: Number,
      productId: String,
      imgs: [String],
      price: String,
      shippingInfo: {
        height: String,
        width: String,
        weight: String,
        length: String,
      },
      _id: String,
      virtualProduct: Boolean,
      categories: [String],
      discountValue: String,
      couponApplied: String,
      totalValue: String,
    },
  ],
});

export type OrderType = {
  userId: string;
  userName: string;
  storeId: string;
  storeName: string;
  totalValue: string;
  totalDiscount: string;
  coupons: string[];
  meLogs: [];
  shippingStatus: string;
  shipping: {
    configs: {
      name: string;
      currency: string;
      company: { id: number; name: string; picture: string };
      additional_services: {
        receipt: boolean;
        own_hand: boolean;
        collect: boolean;
      };
    };
    estimated: {
      custom_delivery_range: { min: number; max: number };
      custom_delivery_time: number;
      custom_price: string;
      delivery_range: { min: number; max: number };
      delivery_time: number;
    };
    packages: {
      dimensions: { height: number; width: number; length: number };
      discount: string;
      format: string;
      insurance_value: string;
      price: string;
      products: { id: string; quantity: number }[];
      weight: string;
    }[];
  };
  products: {
    amount: number;
    productId: string;
    imgs: string[];
    price: string;
    shippingInfo: {
      height: string;
      width: string;
      weight: string;
      length: string;
    };
    _id: string;
    virtualProduct: boolean;
    categories: string[];
    discountValue: string;
    couponApplied: string;
    totalValue: string;
  }[];
};
