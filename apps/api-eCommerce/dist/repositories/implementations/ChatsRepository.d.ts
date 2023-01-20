/// <reference types="mongoose-paginate" />
import { Model } from "mongoose";
import { ChatType, MessageSchema, MessageType, RoomType } from "../../entities/chat.entitie";
import { IChatRepository, IMessageRepository, IRoomRepository } from "../Interfaces/IChatRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class ChatsRepository extends ConnectRepo implements IChatRepository {
    chatModel: Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isActive: boolean;
        rooms: any[];
        owner?: string | undefined;
    }, {}, {}, {}, import("mongoose").Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isActive: boolean;
        rooms: any[];
        owner?: string | undefined;
    }>>;
    roomModel: Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type?: string | undefined;
        body?: string | undefined;
        sender?: string | undefined;
        roomId?: string | undefined;
    }, {}, {}, {}, import("mongoose").Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type?: string | undefined;
        body?: string | undefined;
        sender?: string | undefined;
        roomId?: string | undefined;
    }>>;
    messageModel: Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        messages: any[];
        users?: string | undefined;
        lastMessage?: any;
        modified?: Date | undefined;
    }, {}, {}, {}, import("mongoose").Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        messages: any[];
        users?: string | undefined;
        lastMessage?: any;
        modified?: Date | undefined;
    }>>;
    roomRepo: RoomsRepo;
    private chatCrud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (pagFilter: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: ChatType) => Promise<any>;
    update: (id: string, data: Partial<ChatType>) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
declare class RoomsRepo implements IRoomRepository {
    private roomsRepo;
    messageRepo: MessagesRepo;
    private roomCrud;
    constructor(roomsRepo: Model<any>, MessageRepo: Model<any>);
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (pagFilter: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: RoomType) => Promise<any>;
    update: (id: string, data: Partial<RoomType>) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
declare class MessagesRepo implements IMessageRepository {
    private MessageRepo;
    private messagesCrud;
    constructor(MessageRepo: Model<typeof MessageSchema>);
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (pagFilter: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: MessageType) => Promise<any>;
    update: (id: string, data: Partial<MessageType>) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
export {};
