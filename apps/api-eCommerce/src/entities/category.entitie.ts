import { ObjectId, Schema } from "mongoose";

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

export type Category = {
  _id?: ObjectId;
  name: String;
  description: String;
  hierarchy?: String;
  isGlobal?: Boolean;
  owner?: String;
  register?: Date;
};
