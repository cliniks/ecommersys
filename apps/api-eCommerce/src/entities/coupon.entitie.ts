import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CouponSchema = new Schema(
  {
    assined: [],
    name: {
      type: String,
      require: true,
      unique: true,
    },
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
  _id?: ObjectId;
  name: string;
  assined: string[];
  description: string;
  type: "percentage" | "fixed" | "shipping"; //confrimar todos os tipos
  value: string;
  minValue: string;
  maxValue?: String;
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
