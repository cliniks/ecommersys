import { chatsRepos } from ".";
import { User } from "../../entities";
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

export const updateChatStatus = async (user: User, status: boolean) => {
  try {
    const getUserChat = await repos.chatRepo.getOne({
      key: "owner",
      value: user._id.toString(),
    });

    const getStoreChat =
      user.storeId &&
      (await repos.chatRepo.getOne({
        key: "owner",
        value: user.storeId.toString(),
      }));

    if (getUserChat)
      await repos.chatRepo.update(getUserChat._id.toString(), {
        status: status,
      });

    if (getStoreChat)
      await repos.chatRepo.update(getStoreChat._id.toString(), {
        status: status,
      });

    return true;
  } catch (err) {
    return console.log(err.toString());
  }
};
