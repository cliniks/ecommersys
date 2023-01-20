"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsRepository = void 0;
const chat_entitie_1 = require("../../entities/chat.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class ChatsRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.chatModel = this.chatDB.chats.model("chats", chat_entitie_1.ChatSchema);
        this.roomModel = this.chatDB.rooms.model("rooms", chat_entitie_1.MessageSchema);
        this.messageModel = this.chatDB.messages.model("messages", chat_entitie_1.RoomSchema);
        this.roomRepo = new RoomsRepo(this.roomModel, this.messageModel);
        this.chatCrud = new CrudRepo_1.CrudRepo(this.chatModel);
        this.getOne = ({ key, value }) => this.chatCrud.getOne({ key, value });
        this.getAll = (pagFilter) => this.chatCrud.getAll(pagFilter);
        this.addOne = (data) => this.chatCrud.addOne(data);
        this.update = (id, data) => this.chatCrud.update(id, data);
        this.delete = (id) => this.chatCrud.delete(id);
    }
}
exports.ChatsRepository = ChatsRepository;
class RoomsRepo {
    constructor(roomsRepo, MessageRepo) {
        this.roomsRepo = roomsRepo;
        this.roomCrud = new CrudRepo_1.CrudRepo(this.roomsRepo);
        this.getOne = ({ key, value }) => this.roomCrud.getOne({ key, value });
        this.getAll = (pagFilter) => this.roomCrud.getAll(pagFilter);
        this.addOne = (data) => this.roomCrud.addOne(data);
        this.update = (id, data) => this.roomCrud.update(id, data);
        this.delete = (id) => this.roomCrud.delete(id);
        this.messageRepo = new MessagesRepo(MessageRepo);
    }
}
class MessagesRepo {
    constructor(MessageRepo) {
        this.MessageRepo = MessageRepo;
        this.messagesCrud = new CrudRepo_1.CrudRepo(this.MessageRepo);
        this.getOne = ({ key, value }) => this.messagesCrud.getOne({ key, value });
        this.getAll = (pagFilter) => this.messagesCrud.getAll(pagFilter);
        this.addOne = (data) => this.messagesCrud.addOne(data);
        this.update = (id, data) => this.messagesCrud.update(id, data);
        this.delete = (id) => this.messagesCrud.delete(id);
    }
}
