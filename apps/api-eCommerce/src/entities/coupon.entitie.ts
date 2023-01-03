import { ObjectId, Schema } from "mongoose";

export const CouponSchema = new Schema({
  assined: [],
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: String,
  type: String,
  value: String,
  minimunValue: String,
  maximunValue: String,
  used: Number,
  limitForUse: Number,
  isCashBack: Boolean,
  isFreeShipping: Boolean,
  isActive: Boolean,
  startDate: Date,
  endDate: Date,
  owner: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

export type Coupon = {
  _id?: ObjectId;
  name: string;
  assined: string[];
  description: string;
  type: "percentage" | "fixed" | "shipping"; //confrimar todos os tipos
  value: string;
  minimunValue: string;
  maximunValue?: String;
  used: number;
  limitForUse: number;
  isCashBack: boolean;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  isFreeShipping: boolean;
  owner: string;
  register?: Date;
};
