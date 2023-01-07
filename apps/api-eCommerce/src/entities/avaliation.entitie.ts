import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const avaliationSchema = new Schema({
  productId: String,
  stars: Number,
  owner: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

avaliationSchema.plugin(mongoosePaginate);

export type Avaliation = {
  _id?: ObjectId;
  productId: string;
  stars: number;
  owner: string;
  register?: Date;
};
