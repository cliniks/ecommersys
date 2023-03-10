import { IWebSocket } from "./IWebSocket";
import { Server } from "socket.io";
import { IChatRepository, IMessageRepository, IRoomRepository } from "../../repositories/Interfaces";
export declare class WebsocketImplementation implements IWebSocket {
    io: Server;
    chatRepo: IChatRepository;
    roomRepo: IRoomRepository;
    messageRepo: IMessageRepository;
    constructor();
    connect(): void;
    userHandShake(): void;
}
