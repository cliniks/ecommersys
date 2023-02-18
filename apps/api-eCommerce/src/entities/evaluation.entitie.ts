import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const EvaluationSchema = new Schema(
  {
    productId: String,
    stars: Number,
    owner: String,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

EvaluationSchema.plugin(mongoosePaginate);

export type Evaluation = {
  _id?: string;
  productId: string;
  isActive: boolean;
  stars: number;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
};
