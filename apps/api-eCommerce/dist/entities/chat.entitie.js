"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.Chat = exports.Message = exports.RoomSchema = exports.MessageSchema = exports.ChatSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ChatSchema = new mongoose_1.Schema({
    owner: {
        type: String,
        require: true,
        unique: true,
    },
    isActive: { type: Boolean, default: true },
    rooms: [],
}, {
    timestamps: true,
});
exports.MessageSchema = new mongoose_1.Schema({
    sender: String,
    type: String,
    body: String,
    roomId: String,
}, {
    timestamps: true,
});
exports.RoomSchema = new mongoose_1.Schema({
    users: String,
    lastMessage: Object,
    messages: [],
    modified: Date,
}, {
    timestamps: true,
});
class Message {
    constructor(message) {
        Object.assign(this, message);
    }
}
exports.Message = Message;
class Chat {
    constructor(chat) {
        Object.assign(this, chat);
    }
}
exports.Chat = Chat;
class Room {
    constructor(room) {
        Object.assign(this, room);
    }
}
exports.Room = Room;
