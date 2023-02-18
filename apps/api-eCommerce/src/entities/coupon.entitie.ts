import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CouponSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    productsAssigned: [String],
    clientsAssigned: [String],
    storesAssigned: [String],
    categoriesAssigned: [String],
    usedIds: [String],
    description: String,
    type: String,
    value: String,
    minValue: String,
    maxValue: String,
    used: { type: Number, default: 0 },
    limitForUse: Number,
    isCashBack: { type: Boolean, default: false },
    isFreeShipping: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    startDate: { type: Date, default: new Date() },
    endDate: Date,
    owner: String,
  },
  {
    timestamps: true,
  }
);
CouponSchema.plugin(mongoosePaginate);

export type Coupon = {
  _id?: string;
  name: string;
  productsAssigned: string[];
  clientsAssigned: string[];
  storesAssigned: string[];
  categoriesAssigned: string[];
  usedIds: string[];
  description: string;
  type: "percentage" | "fixed" | "shipping"; //confrimar todos os tipos
  value: string;
  minValue: string;
  maxValue?: string;
  used: number;
  limitForUse: number;
  isCashBack: boolean;
  startDate?: Date;
  endDate?: Date;
  isActive: boolean;
  isFreeShipping: boolean;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
};
