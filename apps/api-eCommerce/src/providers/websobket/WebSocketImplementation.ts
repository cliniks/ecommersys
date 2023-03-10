import { IWebSocket } from "./IWebSocket";
import * as redis from "redis";
import io, { Server, Socket } from "socket.io";
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
import http from "http";
import { updateChatStatus } from "../../useCases/ChatsUseCases/updateChatStatus";

export class WebsocketImplementation implements IWebSocket {
  public io: Server;

  public chatRepo: IChatRepository = ChatsRepository;

  public roomRepo: IRoomRepository = RoomsRepository;

  public messageRepo: IMessageRepository = MessagesRepository;

  constructor(
    HTTP: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  ) {
    this.connect(HTTP);
  }

  connect(
    HTTP: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  ) {
    // const redisClient = redis.createClient({
    //   socket: {
    //     host: process.env.REDIS_HOST,
    //     port: parseInt(`${process.env.REDIS_PORT}`),
    //   },
    //   password: process.env.REDIS_PASS,
    // });

    // const subClient = redisClient.duplicate();

    this.io = new io.Server(HTTP, {
      transports: ["polling", "websocket"],
      cors: {
        origin: "*",
      },
    });

    // this.io.adapter(createAdapter(redisClient, subClient));

    this.userHandShake();

    this.io.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }

  userHandShake() {
    const chats = this.chatRepo;
    const rooms = this.roomRepo;
    const messages = this.messageRepo;
    const ioSocket = this.io;

    this.io.on("connection", async function (socket) {
      const { handshake } = socket;

      const token =
        handshake.headers["x-access-token"] || handshake.auth["x-access-token"];

      const user = getUserFromToken(token);
      const userData = await user;

      console.log("conectando", userData?.userInfo?.name);

      if (userData) await updateChatStatus(userData, true);

      socket.on("disconnect", async () => {
        console.log("socket disconnected:", userData?._id);
        if (userData) await updateChatStatus(userData, false);
      });

      chatMethods(socket, user, ioSocket, chats, rooms, messages);
    });
  }
}
