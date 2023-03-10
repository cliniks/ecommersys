import { Router } from "express";
import { ChatUseCases } from "../useCases/ChatsUseCases";

const ChatsRoutes: Router = Router();

ChatsRoutes.get("/allChats", ChatUseCases.getAllChats);
ChatsRoutes.get("/allRooms", ChatUseCases.getAllRooms);
ChatsRoutes.get("/allMessages", ChatUseCases.getAllMessages);

ChatsRoutes.get("/myChat", ChatUseCases.getMyChats);

ChatsRoutes.get("/myStoreChat", ChatUseCases.getMyStoreChats);

ChatsRoutes.get("/roomMessages/:roomId", ChatUseCases.getRoomMessages);

ChatsRoutes.post("/", ChatUseCases.createChat);

ChatsRoutes.post("/storeChat", ChatUseCases.createStoreChat);

ChatsRoutes.post("/room", ChatUseCases.createRoom);

ChatsRoutes.post("/storeRoom", ChatUseCases.createStoreRoom);

ChatsRoutes.post("/sendMessage/:roomId", ChatUseCases.sendMessage);

ChatsRoutes.delete("/chat/:chatId", ChatUseCases.inactiveChat);

ChatsRoutes.delete("/chat/room/:roomId", ChatUseCases.inactiveRoom);

ChatsRoutes.delete("/chat/:id", ChatUseCases.dellChat);

ChatsRoutes.delete("/room/:id", ChatUseCases.dellRoom);

ChatsRoutes.patch("/:id", ChatUseCases.updateChat);

ChatsRoutes.delete("/message/:id", ChatUseCases.dellMessage);

export { ChatsRoutes };
