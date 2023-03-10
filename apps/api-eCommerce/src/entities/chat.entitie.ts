import { ObjectId, Schema } from "mongoose";

export const ChatSchema = new Schema(
  {
    owner: {
      type: String,
      require: true,
      unique: true,
    },
    status: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    rooms: [String],
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
    read: [String],
  },
  {
    timestamps: true,
  }
);

export const RoomSchema = new Schema(
  {
    users: [],
    lastMessage: Object,
    messages: [String],
    modified: Date,
  },
  {
    timestamps: true,
  }
);

export type ChatType = {
  _id?: ObjectId;
  owner: string;
  isActive?: boolean;
  status?: boolean;
  rooms?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type RoomType = {
  _id?: string;
  users: string[];
  lastMessage?: MessageType;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type MessageType = {
  _id?: string;
  sender: string;
  type: "text" | "image" | "document";
  read?: string[];
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
