import { IWebSocket } from "./IWebSocket";
import { Server } from "socket.io";
export declare class WebsocketImplementation implements IWebSocket {
    io: Server;
    private chatRepo;
    constructor();
    connect(): void;
    userHandShake(): void;
}
