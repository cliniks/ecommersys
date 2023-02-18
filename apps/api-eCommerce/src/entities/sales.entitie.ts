import { Schema } from "mongoose";
import { Product } from "./product.entitie";

export const paymentStatus = [
  "PENDING",
  "RECEIVED",
  "CONFIRMED",
  "OVERDUE",
  "REFUNDED",
  "REFUND_REQUESTED",
  "CHARGEBACK_REQUESTED",
  "CHARGEBACK_DISPUTE",
  "AWAITING_CHARGEBACK_REVERSAL",
  "DUNNING_REQUESTED",
  "AWAIT_RISK_ANALYSIS",
];

export const SalesSchema = new Schema(
  {
    sellers: [
      {
        storeId: String,
        coupons: [String],
        walletId: String,
        products: [
          {
            imgs: [String],
            name: String,
            owner: String,
            price: String,
            regularPrice: String,
            shippingInfo: {
              height: String,
              width: String,
              weight: String,
              length: String,
            },
            stockInfo: {
              qnt: Number,
              sku: String,
              SoldIndividually: Boolean,
            },
            _id: String,
            virtualProduct: Boolean,
            categories: [String],
          },
        ],
      },
    ],
    userId: String,
    addressId: String,
    payment: {
      amount: Number,
      paymentMethod: String,
      cardToken: String,
      id: String,
    },
    coupons: [String],
    totalValue: Number,
    totalDiscount: Number,
    totalItems: Number,
    billingType: {
      type: String,
      enum: [
        "BOLETO",
        "CREDIT_CARD",
        "UNDEFINED",
        "TRANSFER",
        "DEPOSIT",
        "PIX",
      ],
    },
    storeIds: [String],
    paymentStatus: { type: String, enum: paymentStatus },
    paymentId: String,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export type Sales = {
  _id?: string;
  sellers: StoreMapped[];
  userId: string;
  addressId: string;
  payment?: {
    amount: number;
    paymentMethod: string;
    cardToken: string;
    id: string;
  };
  coupons: string[];
  totalValue: number;
  totalDiscount: number;
  totalItems: number;
  billingType: billingType;
  paymentStatus?: paymentTypes;
  paymentId?: string;
  storeIds: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductSaleInfo = {
  productId: string;
  amount: number;
};

export type StoreMapped = {
  storeId: string;
  products: ProductMapped[];
  totalPrice: number;
  walletId: string;
  totalDiscount: number;
  coupons: string[];
};

type ProductMapped = {
  product: Partial<Product>;
  amount: number;
  value: number;
  couponApplied: string;
  discountValue: number;
  totalValue: number;
};

export type paymentTypes =
  | "PENDING"
  | "RECEIVED"
  | "CONFIRMED"
  | "OVERDUE"
  | "REFUNDED"
  | "REFUND_REQUESTED"
  | "CHARGEBACK_REQUESTED"
  | "CHARGEBACK_DISPUTE"
  | "AWAITING_CHARGEBACK_REVERSAL"
  | "DUNNING_REQUESTED"
  | "AWAIT_RISK_ANALYSIS";

export type billingType =
  | "BOLETO"
  | "CREDIT_CARD"
  | "UNDEFINED"
  | "TRANSFER"
  | "DEPOSIT"
  | "PIX";
