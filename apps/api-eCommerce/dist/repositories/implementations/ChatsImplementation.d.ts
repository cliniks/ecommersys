import { ChatType, MessageType, RoomType } from "../../entities";
import { IChatRepository, IMessageRepository, IRoomRepository, getAllProps, getOneProps } from "../Interfaces";
import { Model } from "mongoose";
export declare class ChatsImplementation implements IChatRepository {
    private model;
    private crud;
    constructor(model: Model<ChatType>);
    getOne: ({ key, value }: getOneProps) => Promise<ChatType>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<ChatType>>;
    getMany: (ids: string[], fields?: string) => Promise<ChatType[]>;
    addOne: (data: ChatType) => Promise<ChatType>;
    update: (id: string, data: Partial<ChatType>) => Promise<ChatType>;
    delete: (id: string) => Promise<any>;
}
export declare class RoomsImplementation implements IRoomRepository {
    private model;
    private crud;
    constructor(model: Model<RoomType>);
    getOne: ({ key, value }: getOneProps) => Promise<RoomType>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<RoomType>>;
    getMany: (ids: string[], fields?: string) => Promise<RoomType[]>;
    addOne: (data: RoomType) => Promise<RoomType>;
    update: (id: string, data: Partial<RoomType>) => Promise<RoomType>;
    delete: (id: string) => Promise<any>;
}
export declare class MessagesImplementation implements IMessageRepository {
    private model;
    private crud;
    constructor(model: Model<MessageType>);
    getOne: ({ key, value }: getOneProps) => Promise<MessageType>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<MessageType>>;
    getMany: (ids: string[], fields?: string) => Promise<MessageType[]>;
    addOne: (data: MessageType) => Promise<MessageType>;
    update: (id: string, data: Partial<MessageType>) => Promise<MessageType>;
    delete: (id: string) => Promise<any>;
}
