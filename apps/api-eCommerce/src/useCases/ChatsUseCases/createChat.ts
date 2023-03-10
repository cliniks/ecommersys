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

export const createChat = async (userId: string) => {
  try {
    const getOne = await repos.chatRepo.getOne({
      key: "owner",
      value: userId.toString(),
    });

    if (!getOne) await repos.chatRepo.addOne({ owner: userId.toString() });

    return true;
  } catch (err) {
    return console.log(err.toString());
  }
};
