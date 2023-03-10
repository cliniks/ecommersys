"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsImplementation = void 0;
const CrudRepo_1 = require("./CrudRepo");
class LeadsImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = (props) => this.crud.getOne(props);
        this.getAll = (props) => this.crud.getAll(props);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.LeadsImplementation = LeadsImplementation;
