"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrudRepo_1 = require("./CrudRepo");
class CouponImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value, fields }) => this.crud.getOne({ key, value, fields });
        this.getAll = (props) => this.crud.getAll(props);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.default = CouponImplementation;
