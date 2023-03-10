import { Server } from "socket.io";
import {
  IChatRepository,
  IMessageRepository,
  IRoomRepository,
} from "../../repositories/Interfaces";

export interface IWebSocket {
  io: Server;
  chatRepo: IChatRepository;
  roomRepo: IRoomRepository;
  messageRepo: IMessageRepository;
}
