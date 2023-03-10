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

export const inactiveRoom = async (roomId: string) => {
  try {
    return true;
  } catch (err) {
    return console.log(err.toString());
  }
};
