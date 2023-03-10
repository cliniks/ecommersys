import { Socket } from "socket.io";
import { User } from "../../../entities";
import { IChatRepository, IRoomRepository, IMessageRepository } from "../../../repositories/Interfaces";
export declare const chatMethods: (socket: Socket<any>, user: Promise<User>, chatRepo: IChatRepository, roomRepo: IRoomRepository, messageRepo: IMessageRepository) => Promise<void>;
