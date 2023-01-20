import { ObjectId, Schema } from "mongoose";

export const ChatSchema = new Schema(
  {
    owner: {
      type: String,
      require: true,
      unique: true,
    },
    isActive: { type: Boolean, default: true },
    rooms: [],
  },
  {
    timestamps: true,
  }
);

export const MessageSchema = new Schema(
  {
    sender: String,
    type: String,
    body: String,
    roomId: String,
  },
  {
    timestamps: true,
  }
);

export const RoomSchema = new Schema(
  {
    users: String,
    lastMessage: Object,
    messages: [],
    modified: Date,
  },
  {
    timestamps: true,
  }
);

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

export class Message {
  constructor(message: MessageType) {
    Object.assign(this, message);
  }
}
export class Chat {
  constructor(chat: ChatType) {
    Object.assign(this, chat);
  }
}

export class Room {
  constructor(room: RoomType) {
    Object.assign(this, room);
  }
}
