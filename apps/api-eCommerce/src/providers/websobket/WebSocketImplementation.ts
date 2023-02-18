import { IWebSocket } from "./IWebSocket";
import * as redis from "redis";
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { chatMethods } from "./chatMethods";
import { getUserFromToken } from "../../utils/returnUserFromToken";
import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
} from "../../repositories";
import {
  IChatRepository,
  IMessageRepository,
  IRoomRepository,
} from "../../repositories/Interfaces";

export class WebsocketImplementation implements IWebSocket {
  public io: Server = new Server();

  public chatRepo: IChatRepository = ChatsRepository;

  public roomRepo: IRoomRepository = RoomsRepository;

  public messageRepo: IMessageRepository = MessagesRepository;

  constructor() {
    this.connect();
  }

  connect() {
    const redisClient = redis.createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(`${process.env.REDIS_PORT}`),
      },
      password: process.env.REDIS_PASS,
    });

    const subClient = redisClient.duplicate();

    const socketPort = 3011;

    this.io.adapter(createAdapter(redisClient, subClient));

    this.io.listen(socketPort);

    this.userHandShake();
    console.log("Socket aberto na porta", socketPort);
  }

  userHandShake() {
    const chats = this.chatRepo;
    const rooms = this.roomRepo;
    const messages = this.messageRepo;

    this.io.on("connection", async function (socket) {
      const { handshake } = socket;

      const user = getUserFromToken(`${handshake.headers["x-access-token"]}`);

      chatMethods(socket, user, chats, rooms, messages);
    });
  }
}
