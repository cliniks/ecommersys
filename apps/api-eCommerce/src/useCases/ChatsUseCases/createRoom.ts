import { chatsRepos } from ".";
import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
} from "../../repositories";
import { sendMessage } from "./sendMessage";

const repos: chatsRepos = {
  chatRepo: ChatsRepository,
  messageRepo: MessagesRepository,
  roomRepo: RoomsRepository,
};

export const createRoom = async (userId: string, clientId: string) => {
  try {
    const userChat = await repos.chatRepo.getOne({
      key: "owner",
      value: `${userId.toString()}`,
    });

    const clientChat = await repos.chatRepo.getOne({
      key: "owner",
      value: `${clientId.toString()}`,
    });

    const verifyExistence = userChat.rooms.find((item) =>
      clientChat.rooms.includes(item.toString())
    );

    if (verifyExistence) throw new Error("Usuários já possuem chat criado");

    const create = await repos.roomRepo.addOne({
      users: [userId.toString(), clientId.toString()],
    });

    const updateChats = async () => {
      let userRooms = Array.from(userChat?.rooms);
      let clientRooms = Array.from(clientChat?.rooms);

      userRooms.push(create._id.toString());
      clientRooms.push(create._id.toString());

      await repos.chatRepo.update(userChat._id.toString(), {
        rooms: userRooms,
      });

      await repos.chatRepo.update(clientChat._id.toString(), {
        rooms: clientRooms,
      });
    };

    await updateChats();

    sendMessage(
      create._id.toString(),
      userId.toString(),
      "text",
      "Comprei o produto X, podemos combinar a entrega?"
    );

    return create;
  } catch (err) {
    return console.log(err.toString());
  }
};
