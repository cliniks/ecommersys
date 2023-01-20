"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMethods = void 0;
const chat_entitie_1 = require("../../../entities/chat.entitie");
const chatMethods = async (socket, user, repo) => {
    socket.on("createRoom", async (body) => {
        const User = await user;
        let chat = await repo.getOne({ key: "owner", value: User._id });
        if (!chat) {
            const newChat = await repo.addOne(new chat_entitie_1.Chat({
                owner: `${User._id}`,
                isActive: true,
                rooms: [],
            }));
            console.log("newChat", newChat);
            chat = newChat;
        }
        console.log("chat", chat);
        const newRoom = await repo.roomRepo.addOne(new chat_entitie_1.Room(Object.assign(Object.assign({}, body), { users: `${body.users}${User._id}`, modified: new Date(), messages: [] })));
        console.log("newRoom", newRoom);
        const updateChat = await repo.update(chat._id, {
            $push: { rooms: newRoom },
        });
        console.log("updateChat", updateChat);
        return updateChat;
    });
    socket.on("connectRoom", async (body) => {
        const room = await repo.roomRepo.getOne({ key: "_id", value: body.roomId });
        const roomMessages = await repo.roomRepo.messageRepo.getAll({
            filter: { key: "roomId", value: body.roomId, fields: "sender type body" },
        });
        const roomObj = { room, messages: roomMessages };
        return roomObj;
    });
    socket.on("sendMessage", async (body) => {
        const User = await user;
        console.log("mensagem", Object.assign(Object.assign({}, body), { sender: User._id, date: new Date() }));
        const message = new chat_entitie_1.Message(Object.assign(Object.assign({}, body), { sender: `${User._id}` }));
        console.log(message);
    });
    socket.on("listAllChats", async () => {
        const chats = await repo.getAll({});
        const rooms = await repo.roomRepo.getAll({});
        const messages = await repo.roomRepo.messageRepo.getAll({});
        socket.emit("list", {
            chats: chats,
            rooms: rooms,
            messages: messages,
        });
    });
};
exports.chatMethods = chatMethods;
