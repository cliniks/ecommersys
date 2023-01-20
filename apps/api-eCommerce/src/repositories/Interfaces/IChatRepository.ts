import { ICrudRepository } from "./ICrudRepository";

export interface IChatRepository extends ICrudRepository {
  roomRepo: IRoomRepository;
}
export interface IRoomRepository extends ICrudRepository {
  messageRepo: IMessageRepository;
}

export interface IMessageRepository extends ICrudRepository {}
