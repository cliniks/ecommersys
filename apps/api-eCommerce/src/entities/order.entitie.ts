import { Schema } from "mongoose";

export const OrderSchema = new Schema({
  userId: String,
  sellerId: String,
  products: [],
});
