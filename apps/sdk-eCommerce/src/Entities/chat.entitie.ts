export type ChatType = {
  _id?: string;
  owner: string;
  isActive?: boolean;
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
