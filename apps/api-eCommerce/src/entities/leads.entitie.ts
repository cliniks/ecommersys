import { Schema } from "mongoose";

export const LeadSchema = new Schema(
  {
    email: String,
    name: String,
    phone: String,
  },
  { timestamps: true }
);

export type LeadType = {
  _id?: string;
  email: string;
  name: string;
  phone: string;
};
