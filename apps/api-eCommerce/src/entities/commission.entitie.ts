import { Schema } from "mongoose";
import { CommissionType } from "./adminConfig.entitie";

export const ProductCommissionSchema = new Schema(
  {
    storeId: String,
    productId: String,
    commissionType: {
      type: String,
      require: true,
      enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
      { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
  },
  {
    timestamps: true,
  }
);

export const CategoryCommissionSchema = new Schema(
  {
    storeId: String,
    categoryId: String,
    commissionType: {
      type: String,
      require: true,
      enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
      { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
  },
  {
    timestamps: true,
  }
);

export const StoreCommissionSchema = new Schema(
  {
    storeId: String,
    commissionType: {
      type: String,
      require: true,
      enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
      { minValue: Number, maxValue: Number, percentage: Number, fixed: Number },
    ],
  },
  {
    timestamps: true,
  }
);

export type storeCommissionType = CommissionType & { storeId: string };

export type productCommissionType = storeCommissionType & { productId: string };

export type categoryCommissionType = storeCommissionType & {
  categoryId: string;
};
