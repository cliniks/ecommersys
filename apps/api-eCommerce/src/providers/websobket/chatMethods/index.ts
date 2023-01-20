import { Socket } from "socket.io";
import { User } from "../../../entities/user.entitie";
import {
  Chat,
  Message,
  MessageType,
  Room,
  RoomType,
} from "../../../entities/chat.entitie";
import { IChatRepository } from "../../../repositories/Interfaces/IChatRepository";

export const chatMethods = async (
  socket: Socket<any>,
  user: Promise<User>,
  repo: IChatRepository
) => {
  socket.on("createRoom", async (body: RoomType) => {
    const User = await user;
    let chat = await repo.getOne({ key: "owner", value: User._id });

    if (!chat) {
      const newChat = await repo.addOne(
        new Chat({
          owner: `${User._id}`,
          isActive: true,
          rooms: [],
        })
      );
      console.log("newChat", newChat);
      chat = newChat;
    }

    console.log("chat", chat);

    const newRoom = await repo.roomRepo.addOne(
      new Room({
        ...body,
        users: `${body.users}${User._id}`,
        modified: new Date(),
        messages: [],
      })
    );

    console.log("newRoom", newRoom);

    const updateChat = await repo.update(chat._id, {
      $push: { rooms: newRoom },
    });

    console.log("updateChat", updateChat);

    return updateChat;
  });

  socket.on("connectRoom", async (body: { roomId: string }) => {
    const room = await repo.roomRepo.getOne({ key: "_id", value: body.roomId });

    const roomMessages: MessageType[] = await repo.roomRepo.messageRepo.getAll({
      filter: { key: "roomId", value: body.roomId, fields: "sender type body" },
    });

    const roomObj = { room, messages: roomMessages };

    return roomObj;
  });

  socket.on("sendMessage", async (body: MessageType) => {
    const User = await user;
    console.log("mensagem", {
      ...body,
      sender: User._id,
      date: new Date(),
    });
    const message = new Message({
      ...body,
      sender: `${User._id}`,
    });
    console.log(message);
  });

  socket.on("listAllChats", async () => {
    const chats = await repo.getAll({});
    const rooms = await repo.roomRepo.getAll({});
    const messages = await repo.roomRepo.messageRepo.getAll({});

    socket.emit("list", {
      chats: chats,
      rooms: rooms,
      messages: messages,
    });
  });
};
