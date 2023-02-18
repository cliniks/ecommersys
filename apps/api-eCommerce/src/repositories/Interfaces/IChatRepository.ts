import { ICrudRepository } from ".";
import { ChatType, MessageType, RoomType } from "../../entities";

export interface IChatRepository extends ICrudRepository<ChatType> {}
export interface IRoomRepository extends ICrudRepository<RoomType> {}
export interface IMessageRepository extends ICrudRepository<MessageType> {}
