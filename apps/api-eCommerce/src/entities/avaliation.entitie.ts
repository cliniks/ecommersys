import { ObjectId, Schema } from "mongoose";

export const avaliationSchema = new Schema({
  productId: String,
  stars: Number,
  owner: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

export type Avaliation = {
  _id?: ObjectId;
  productId: string;
  stars: number;
  owner: string;
  register?: Date;
};
