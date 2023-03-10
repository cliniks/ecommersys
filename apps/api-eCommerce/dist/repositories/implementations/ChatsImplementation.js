"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesImplementation = exports.RoomsImplementation = exports.ChatsImplementation = void 0;
const CrudRepo_1 = require("./CrudRepo");
class ChatsImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.ChatsImplementation = ChatsImplementation;
class RoomsImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.RoomsImplementation = RoomsImplementation;
class MessagesImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.MessagesImplementation = MessagesImplementation;
