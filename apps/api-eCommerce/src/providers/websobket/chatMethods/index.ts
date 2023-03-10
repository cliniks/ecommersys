import { Server, Socket } from "socket.io";
import { User } from "../../../entities";
import {
  IChatRepository,
  IRoomRepository,
  IMessageRepository,
} from "../../../repositories/Interfaces";
import { getMyChats } from "../../../useCases/ChatsUseCases/getMyChats";
import { getRoomMessages } from "../../../useCases/ChatsUseCases/getRoomMessages";
import { sendMessage } from "../../../useCases/ChatsUseCases/sendMessage";
// import { createRoom } from "../../../useCases/ChatsUseCases/createRoom";

export const chatMethods = async (
  socket: Socket<any>,
  user: Promise<User>,
  io: Server,
  chatRepo: IChatRepository,
  roomRepo: IRoomRepository,
  messageRepo: IMessageRepository
) => {
  const userData = await user;

  socket.on("listenMyUserChat", async () => {
    const getChat = await getMyChats(userData._id);

    socket.emit(`myChat/${userData._id.toString()}`, getChat);
  });

  socket.on("listenMyStoreChat", async () => {
    const getChat = await getMyChats(userData.storeId);

    socket.emit(`myChat/${userData.storeId.toString()}`, getChat);
  });

  socket.on("listenRoom", async ({ roomId }: { roomId: string }) => {
    const getRoom = await getRoomMessages(roomId, userData._id.toString());

    const rooms = socket.rooms;

    rooms.forEach((item) => {
      socket.leave(item);
    });

    socket.join(roomId);

    socket.emit(`room/${roomId.toString()}`, getRoom);
  });

  socket.on(
    "sendUserMessage",
    async ({
      roomId,
      type,
      body,
    }: {
      roomId: string;
      type: "text" | "image" | "document";
      body: string;
    }) => {
      await sendMessage(roomId, userData._id, type, body);

      const getRoom = await getRoomMessages(roomId, userData._id.toString());

      io.emit(`room/${roomId.toString()}`, getRoom);
    }
  );

  socket.on(
    "sendStoreMessage",
    async ({
      roomId,
      type,
      body,
    }: {
      roomId: string;
      type: "text" | "image" | "document";
      body: string;
    }) => {
      await sendMessage(roomId, userData.storeId, type, body);

      const getRoom = await getRoomMessages(
        roomId,
        userData.storeId.toString()
      );

      io.emit(`room/${roomId.toString()}`, getRoom);
    }
  );
};
