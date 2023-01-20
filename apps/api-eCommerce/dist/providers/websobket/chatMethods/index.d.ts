import { Socket } from "socket.io";
import { User } from "../../../entities/user.entitie";
import { IChatRepository } from "../../../repositories/Interfaces/IChatRepository";
export declare const chatMethods: (socket: Socket<any>, user: Promise<User>, repo: IChatRepository) => Promise<void>;
