"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMethods = void 0;
const chatMethods = async (socket, user, chatRepo, roomRepo, messageRepo) => {
    socket.on("createRoom", async (body) => {
        const User = await user;
        let chat = await chatRepo.getOne({ key: "owner", value: User._id });
        if (!chat) {
            const newChat = await chatRepo.addOne({
                owner: `${User._id}`,
                isActive: true,
                rooms: [],
            });
            console.log("newChat", newChat);
            chat = newChat;
        }
        console.log("chat", chat);
        const newRoom = await roomRepo.addOne(Object.assign(Object.assign({}, body), { users: `${body.users}${User._id}`, modified: new Date(), messages: [] }));
        console.log("newRoom", newRoom);
        const pushRoom = { $push: { rooms: newRoom } };
        const updateChat = await chatRepo.update(`${chat._id}`, pushRoom);
        console.log("updateChat", updateChat);
        return updateChat;
    });
    socket.on("connectRoom", async (body) => {
        const room = await roomRepo.getOne({ key: "_id", value: body.roomId });
        const roomMessages = (await messageRepo.getAll({
            page: 0,
            size: 100,
            filter: {
                key: "roomId",
                value: body.roomId,
                fields: "sender type body",
            },
        })).result;
        const roomObj = { room, messages: roomMessages };
        return roomObj;
    });
    socket.on("sendMessage", async (body) => {
        const User = await user;
        console.log("mensagem", Object.assign(Object.assign({}, body), { sender: User._id, date: new Date() }));
        const message = Object.assign(Object.assign({}, body), { sender: `${User._id}` });
        console.log(message);
    });
    socket.on("listAllChats", async () => {
        const chats = await chatRepo.getAll({});
        const rooms = await roomRepo.getAll({});
        const messages = await messageRepo.getAll({});
        socket.emit("list", {
            chats: chats,
            rooms: rooms,
            messages: messages,
        });
    });
};
exports.chatMethods = chatMethods;
