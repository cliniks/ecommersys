import { IWebSocket } from "./IWebSocket";
import * as redis from "redis";
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { chatMethods } from "./chatMethods";
import { getUserFromToken } from "../../utils/returnUserFromToken";
import { ChatsRepository } from "../../repositories/implementations/ChatsRepository";
import { IChatRepository } from "../../repositories/Interfaces/IChatRepository";

export class WebsocketImplementation implements IWebSocket {
  public io: Server = new Server();

  private chatRepo: IChatRepository = new ChatsRepository();

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
    const repo = this.chatRepo;

    this.io.on("connection", async function (socket) {
      const { handshake } = socket;

      const user = getUserFromToken(`${handshake.headers["x-access-token"]}`);

      socket.emit("greeting-from-server", {
        greeting: "Hello Client",
      });

      socket.on("greeting-from-client", function (message) {
        console.log(message);
      });

      chatMethods(socket, user, repo);
    });
  }
}
