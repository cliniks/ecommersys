import { Schema } from "mongoose";

export const NotificationSchema = new Schema(
  {
    title: { type: String, require: true },
    message: String,
    direction: {
      type: String,
      enum: ["allStores", "allClients", "client", "store", "all"],
    },
    directionId: [String],
    path: String,
    startDate: Date,
    endDate: Date,
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export type notificationTypes = {
  _id?: string;
  title: string;
  message: string;
  direction: "allStores" | "allClients" | "client" | "store" | "all";
  directionId: string[];
  path: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
