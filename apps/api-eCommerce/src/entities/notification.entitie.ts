import { Schema } from "mongoose";

export const NotificationSchema = new Schema(
  {
    title: { type: String, require: true },
    message: String,
    direction: {
      type: String,
      enum: ["allStores", "allClients", "client", "store", "global"],
    },
    directionId: [String],
    isFixed: { type: Boolean, default: false },
    path: String,
    isRead: [String],
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
  direction: "allStores" | "allClients" | "client" | "store" | "global";
  directionId: string[];
  isFixed: boolean;
  path: string;
  startDate: Date;
  endDate: Date;
  isRead: string[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
