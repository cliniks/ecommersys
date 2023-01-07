import { ObjectId, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

export const CategorySchema = new Schema({
  name: String,
  description: String,
  hierarchy: String,
  isGlobal: Boolean,
  owner: String,
  register: {
    type: Date,
    default: Date.now,
  },
});
CategorySchema.plugin(mongoosePaginate);

export type Category = {
  _id?: ObjectId;
  name: String;
  description: String;
  hierarchy?: String;
  isGlobal?: Boolean;
  owner?: String;
  register?: Date;
};
