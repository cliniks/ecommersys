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

export const getRoomMessages = async (roomId: string, userId?: string) => {
  try {
    const getMessages = await repos.messageRepo.getAll({
      page: 0,
      size: 50,
      filter: { key: "roomId", value: roomId },
    });

    if (userId) {
      for (let messages of getMessages.result) {
        if (!messages.read.includes(userId)) {
          let newRead = Array.from(messages.read);
          newRead.push(userId);
          MessagesRepository.update(messages._id, { read: newRead });
        }
      }
    }

    return getMessages.result;
  } catch (err) {
    return console.log(err.toString());
  }
};
