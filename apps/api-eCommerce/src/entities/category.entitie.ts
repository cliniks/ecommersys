import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CategorySchema = new Schema(
  {
    name: String,
    description: String,
    hierarchy: String,
    isGlobal: Boolean,
    owner: String,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(mongoosePaginate);

export type Category = {
  _id?: ObjectId;
  name: String;
  description: String;
  hierarchy?: String;
  isGlobal?: Boolean;
  isActive: Boolean;
  owner?: String;
  createdAt?: Date;
  updatedAt?: Date;
};
