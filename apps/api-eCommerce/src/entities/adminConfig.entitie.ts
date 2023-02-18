import { Schema } from "mongoose";
import { categoryCommissionType } from "./commission.entitie";

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
    global: {
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
    categories: [
      {
        commissionType: {
          type: String,
          enum: ["percentage", "fixed+percentage", "fixed"],
        },
        categoryId: String,
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
  updatedAt: Date;
  createdAt: Date;
};

export type GlobalCommissionType = {
  global: CommissionType;
  categories: categoryCommissionType[];
};
