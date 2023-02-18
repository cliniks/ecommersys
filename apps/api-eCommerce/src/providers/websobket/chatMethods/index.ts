import { Socket } from "socket.io";
import { MessageType, RoomType, User } from "../../../entities";
import {
  IChatRepository,
  IRoomRepository,
  IMessageRepository,
} from "../../../repositories/Interfaces";

export const chatMethods = async (
  socket: Socket<any>,
  user: Promise<User>,
  chatRepo: IChatRepository,
  roomRepo: IRoomRepository,
  messageRepo: IMessageRepository
) => {
  socket.on("createRoom", async (body: RoomType) => {
    const User = await user;
    let chat = await chatRepo.getOne({ key: "owner", value: User._id });

    if (!chat) {
      const newChat = await chatRepo.addOne({
        owner: `${User._id}`,
        isActive: true,
        rooms: [],
      });
      console.log("newChat", newChat);
      chat = newChat;
    }

    console.log("chat", chat);

    const newRoom = await roomRepo.addOne({
      ...body,
      users: `${body.users}${User._id}`,
      modified: new Date(),
      messages: [],
    });

    console.log("newRoom", newRoom);

    const pushRoom: any = { $push: { rooms: newRoom } };
    const updateChat = await chatRepo.update(`${chat._id}`, pushRoom);

    console.log("updateChat", updateChat);

    return updateChat;
  });

  socket.on("connectRoom", async (body: { roomId: string }) => {
    const room = await roomRepo.getOne({ key: "_id", value: body.roomId });

    const roomMessages: MessageType[] = (
      await messageRepo.getAll({
        page: 0,
        size: 100,
        filter: {
          key: "roomId",
          value: body.roomId,
          fields: "sender type body",
        },
      })
    ).result;

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
    const message = {
      ...body,
      sender: `${User._id}`,
    };
    console.log(message);
  });

  socket.on("listAllChats", async () => {
    const chats = await chatRepo.getAll({});
    const rooms = await roomRepo.getAll({});
    const messages = await messageRepo.getAll({});

    socket.emit("list", {
      chats: chats,
      rooms: rooms,
      messages: messages,
    });
  });
};
