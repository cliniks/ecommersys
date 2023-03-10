import { chatsRepos } from ".";
import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
} from "../../repositories";

const repos: chatsRepos = {
  chatRepo: ChatsRepository,
  messageRepo: MessagesRepository,
  roomRepo: RoomsRepository,
};

export const joinRoom = async (userId: string, clientId: string) => {
  try {
    const userChat = await repos.chatRepo.getOne({
      key: "owner",
      value: `${userId}`,
    });

    const clientChat = await repos.chatRepo.getOne({
      key: "owner",
      value: `${clientId}`,
    });

    const verifyExistence = userChat.rooms.find((item) =>
      clientChat.rooms.includes(item)
    );

    if (verifyExistence) throw new Error("Usuários já possuem chat criado");

    const create = await repos.roomRepo.addOne({ users: [userId, clientId] });

    const updateChats = async () => {
      let userRooms = Array.from(userChat?.rooms);
      let clientRooms = Array.from(clientChat?.rooms);

      userRooms.push(create._id);
      clientRooms.push(create._id);

      await repos.chatRepo.update(userChat._id.toString(), {
        rooms: userRooms,
      });

      await repos.chatRepo.update(clientChat._id.toString(), {
        rooms: clientRooms,
      });
    };

    await updateChats();

    return create;
  } catch (err) {
    return console.log(err.toString());
  }
};
