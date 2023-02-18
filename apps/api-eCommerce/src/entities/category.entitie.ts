import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CategorySchema = new Schema(
  {
    name: String,
    description: String,
    hierarchy: String,
    isGlobal: { type: Boolean, default: true },
    owner: String,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(mongoosePaginate);

export type Category = {
  _id?: string;
  name: string;
  description: string;
  hierarchy?: string;
  isGlobal?: Boolean;
  isActive: Boolean;
  owner?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
