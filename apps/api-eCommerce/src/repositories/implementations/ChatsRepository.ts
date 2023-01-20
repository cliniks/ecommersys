import { Model } from "mongoose";
import {
  ChatSchema,
  ChatType,
  MessageSchema,
  MessageType,
  RoomSchema,
  RoomType,
} from "../../entities/chat.entitie";
import {
  IChatRepository,
  IMessageRepository,
  IRoomRepository,
} from "../Interfaces/IChatRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class ChatsRepository extends ConnectRepo implements IChatRepository {
  public chatModel = this.chatDB.chats.model("chats", ChatSchema);
  public roomModel = this.chatDB.rooms.model("rooms", MessageSchema);
  public messageModel = this.chatDB.messages.model("messages", RoomSchema);

  public roomRepo = new RoomsRepo(this.roomModel, this.messageModel);

  private chatCrud = new CrudRepo(this.chatModel);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) =>
    this.chatCrud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.chatCrud.getAll(pagFilter);

  addOne = (data: ChatType) => this.chatCrud.addOne(data);

  update = (id: string, data: Partial<ChatType>) =>
    this.chatCrud.update(id, data);

  delete = (id: string) => this.chatCrud.delete(id);
}

class RoomsRepo implements IRoomRepository {
  public messageRepo;
  private roomCrud = new CrudRepo(this.roomsRepo);

  constructor(private roomsRepo: Model<any>, MessageRepo: Model<any>) {
    this.messageRepo = new MessagesRepo(MessageRepo);
  }

  getOne = ({ key, value }: getOneProps) =>
    this.roomCrud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.roomCrud.getAll(pagFilter);

  addOne = (data: RoomType) => this.roomCrud.addOne(data);

  update = (id: string, data: Partial<RoomType>) =>
    this.roomCrud.update(id, data);

  delete = (id: string) => this.roomCrud.delete(id);
}

class MessagesRepo implements IMessageRepository {
  private messagesCrud = new CrudRepo(this.MessageRepo);

  constructor(private MessageRepo: Model<typeof MessageSchema>) {}

  getOne = ({ key, value }: getOneProps) =>
    this.messagesCrud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.messagesCrud.getAll(pagFilter);

  addOne = (data: MessageType) => this.messagesCrud.addOne(data);

  update = (id: string, data: Partial<MessageType>) =>
    this.messagesCrud.update(id, data);

  delete = (id: string) => this.messagesCrud.delete(id);
}
