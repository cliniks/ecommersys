import { Schema } from "mongoose";

export const DocumentsAdminSchema = new Schema(
  {
    documentTypes: [String],
  },
  {
    timestamps: true,
  }
);

export const GlobalCommissionSchema = new Schema(
  {
    commissionType: {
      type: String,
      enum: ["percentage", "fixed+percentage", "fixed"],
    },
    percentage: Number,
    fixed: Number,
    scalable: [
      {
        minValue: Number,
        maxValue: Number,
        percentage: Number,
        fixed: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export type DocumentsAdminType = {};

export type CommissionType = {
  _id?: string;
  commissionType: "percentage" | "fixed+percentage" | "fixed";
  percentage: Number;
  fixed: Number;
  scalable: {
    minValue: Number;
    maxValue: Number;
    percentage: Number;
    fixed: Number;
  }[];
  updatedAt?: Date;
  createdAt?: Date;
};
