"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketImplementation = void 0;
const redis = __importStar(require("redis"));
const socket_io_1 = require("socket.io");
const redis_adapter_1 = require("@socket.io/redis-adapter");
const chatMethods_1 = require("./chatMethods");
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const ChatsRepository_1 = require("../../repositories/implementations/ChatsRepository");
class WebsocketImplementation {
    constructor() {
        this.io = new socket_io_1.Server();
        this.chatRepo = new ChatsRepository_1.ChatsRepository();
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
        this.io.adapter((0, redis_adapter_1.createAdapter)(redisClient, subClient));
        this.io.listen(socketPort);
        this.userHandShake();
        console.log("Socket aberto na porta", socketPort);
    }
    userHandShake() {
        const repo = this.chatRepo;
        this.io.on("connection", async function (socket) {
            const { handshake } = socket;
            const user = (0, returnUserFromToken_1.getUserFromToken)(`${handshake.headers["x-access-token"]}`);
            socket.emit("greeting-from-server", {
                greeting: "Hello Client",
            });
            socket.on("greeting-from-client", function (message) {
                console.log(message);
            });
            (0, chatMethods_1.chatMethods)(socket, user, repo);
        });
    }
}
exports.WebsocketImplementation = WebsocketImplementation;
