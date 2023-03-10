/// <reference types="mongoose-paginate" />
import { ObjectId, Schema } from "mongoose";
export declare const ChatSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    isActive: boolean;
    rooms: import("mongoose").Types.DocumentArray<any> | any[];
    owner?: string;
}>;
export declare const MessageSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    type?: string;
    sender?: string;
    body?: string;
    roomId?: string;
}>;
export declare const RoomSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    users: string[];
    messages: import("mongoose").Types.DocumentArray<any> | any[];
    lastMessage?: any;
    modified?: Date;
}>;
export declare type ChatType = {
    _id?: ObjectId;
    owner: string;
    isActive: boolean;
    rooms: RoomType[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type RoomType = {
    users: string[];
    lastMessage: MessageType;
    messages: MessageType[];
    modified: Date;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type MessageType = {
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
