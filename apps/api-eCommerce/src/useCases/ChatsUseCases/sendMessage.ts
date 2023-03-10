import { chatsRepos } from ".";
import { MessageType } from "../../entities";
import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
} from "../../repositories";
import { updateChatLastMessage } from "./updateChatLastMessage";

const repos: chatsRepos = {
  chatRepo: ChatsRepository,
  messageRepo: MessagesRepository,
  roomRepo: RoomsRepository,
};

export const sendMessage = async (
  roomId: string,
  userId: string,
  type: "text" | "image" | "document",
  body: string
) => {
  try {
    const addMessage = await repos.messageRepo.addOne({
      roomId,
      sender: userId.toString(),
      type,
      body,
    });

    await updateChatLastMessage(roomId, addMessage, repos.roomRepo);

    return addMessage;
  } catch (err) {
    return console.log(err.toString());
  }
};
