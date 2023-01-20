/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const ChatSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isActive: boolean;
    rooms: any[];
    owner?: string | undefined;
}>;
export declare const MessageSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type?: string | undefined;
    body?: string | undefined;
    sender?: string | undefined;
    roomId?: string | undefined;
}>;
export declare const RoomSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    messages: any[];
    users?: string | undefined;
    lastMessage?: any;
    modified?: Date | undefined;
}>;
export type ChatType = {
    _id?: ObjectId;
    owner: string;
    isActive: boolean;
    rooms: RoomType[];
    createdAt?: Date;
    updatedAt?: Date;
};
export type RoomType = {
    users: string;
    lastMessage: MessageType;
    messages: MessageType[];
    modified: Date;
    createdAt?: Date;
    updatedAt?: Date;
};
export type MessageType = {
    sender: string;
    type: "text" | "image" | "document";
    body: string;
    roomId: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare class Message {
    constructor(message: MessageType);
}
export declare class Chat {
    constructor(chat: ChatType);
}
export declare class Room {
    constructor(room: RoomType);
}
