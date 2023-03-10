/// <reference types="mongoose-paginate" />
import { Schema } from "mongoose";
export declare const NotificationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    directionId: string[];
    message?: string;
    path?: string;
    endDate?: Date;
    startDate?: Date;
    title?: string;
    direction?: "all" | "allStores" | "allClients" | "client" | "store";
}>;
export declare type notificationTypes = {
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
