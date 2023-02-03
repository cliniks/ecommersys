import { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const StorePoliciesSchema = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    type: String,
    status: String,
    isActive: { type: Boolean, default: true },
    owner: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
StorePoliciesSchema.plugin(mongoosePaginate);

export type StorePolicy = {
  name: string;
  body: String;
  status: string;
  owner: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
