import { Request, Response } from "express";
import {
  IChatRepository,
  IMessageRepository,
  IRoomRepository,
} from "../../repositories/Interfaces";
import { createChat } from "./createChat";
import { getMyChats } from "./getMyChats";
import { sendMessage } from "./sendMessage";
import { inactiveChat } from "./inactiveChat";
import { createRoom } from "./createRoom";
import { getRoomMessages } from "./getRoomMessages";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { getAll } from "../CrudUseCases/getAll";
import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
} from "../../repositories";
import { inactiveRoom } from "./inactiveRoom";
import { del } from "../CrudUseCases/delete";
import { update } from "../CrudUseCases/update";

export const ChatUseCases = {
  createChat: async (req: Request, res: Response) => {
    try {
      const user = await returnUserFromToken(req);
      const result = await createChat(user._id);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  createStoreChat: async (req: Request, res: Response) => {
    try {
      const user = await returnUserFromToken(req);
      const result = await createChat(user.storeId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  createRoom: async (req: Request, res: Response) => {
    try {
      const { clientId } = req.body;
      const user = await returnUserFromToken(req);
      const result = await createRoom(user._id, clientId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  createStoreRoom: async (req: Request, res: Response) => {
    try {
      const { clientId } = req.body;
      const user = await returnUserFromToken(req);
      const result = await createRoom(user.storeId, clientId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  getMyChats: async (req: Request, res: Response) => {
    try {
      const user = await returnUserFromToken(req);
      const result = await getMyChats(user._id);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  getMyStoreChats: async (req: Request, res: Response) => {
    try {
      const user = await returnUserFromToken(req);
      const result = await getMyChats(user.storeId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  getRoomMessages: async (req: Request, res: Response) => {
    try {
      const { roomId } = req.params;
      const result = await getRoomMessages(roomId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  sendMessage: async (req: Request, res: Response) => {
    try {
      const { roomId } = req.params;
      const { type, body } = req.body;

      const user = await returnUserFromToken(req);
      const result = await sendMessage(roomId, user._id, type, body);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  sendStoreMessage: async (req: Request, res: Response) => {
    try {
      const { roomId } = req.params;
      const { type, body } = req.body;

      const user = await returnUserFromToken(req);
      const result = await sendMessage(roomId, user.storeId, type, body);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  inactiveChat: async (req: Request, res: Response) => {
    try {
      const { chatId } = req.params;
      const result = await inactiveChat(chatId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  inactiveRoom: async (req: Request, res: Response) => {
    try {
      const { roomId } = req.params;
      const result = await inactiveRoom(roomId);
      res.json(result);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  getAllChats: async (req: Request, res: Response) =>
    await getAll(req, res, ChatsRepository),
  getAllRooms: async (req: Request, res: Response) =>
    await getAll(req, res, RoomsRepository),
  getAllMessages: async (req: Request, res: Response) =>
    await getAll(req, res, MessagesRepository),

  updateChat: async (req: Request, res: Response) =>
    await update(req, res, ChatsRepository),

  dellChat: async (req: Request, res: Response) =>
    await del(req, res, ChatsRepository),
  dellMessage: async (req: Request, res: Response) =>
    await del(req, res, MessagesRepository),
  dellRoom: async (req: Request, res: Response) =>
    await del(req, res, RoomsRepository),
};

export type chatsRepos = {
  chatRepo: IChatRepository;
  messageRepo: IMessageRepository;
  roomRepo: IRoomRepository;
};
