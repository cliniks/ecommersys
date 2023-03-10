import { Message, MessageType } from "../../entities";
import { IRoomRepository } from "../../repositories/Interfaces";

export const updateChatLastMessage = async (
  roomId: string,
  message: MessageType,
  roomRepo: IRoomRepository
) => {
  try {
    const roomUpdate = await roomRepo.update(roomId, { lastMessage: message });

    return roomUpdate;
  } catch (err) {
    return console.log(err.toString());
  }
};
