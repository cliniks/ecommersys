import { ChatType, MessageType, RoomType } from "../../entities";
import {
  IChatRepository,
  ICrudRepository,
  IMessageRepository,
  IRoomRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";
import { Model } from "mongoose";

export class ChatsImplementation implements IChatRepository {
  private crud: ICrudRepository<ChatType>;

  constructor(private model: Model<ChatType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: ChatType) => this.crud.addOne(data);

  update = (id: string, data: Partial<ChatType>) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export class RoomsImplementation implements IRoomRepository {
  private crud: ICrudRepository<RoomType>;

  constructor(private model: Model<RoomType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: RoomType) => this.crud.addOne(data);

  update = (id: string, data: Partial<RoomType>) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export class MessagesImplementation implements IMessageRepository {
  private crud: ICrudRepository<MessageType>;

  constructor(private model: Model<MessageType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: MessageType) => this.crud.addOne(data);

  update = (id: string, data: Partial<MessageType>) =>
    this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
