"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCommissionImplementation = exports.CategoryCommissionImplementation = exports.StoreCommissionImplementation = exports.GlobalCommissionImplementation = void 0;
const CrudRepo_1 = require("./CrudRepo");
class GlobalCommissionImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.GlobalCommissionImplementation = GlobalCommissionImplementation;
class StoreCommissionImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.StoreCommissionImplementation = StoreCommissionImplementation;
class CategoryCommissionImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.CategoryCommissionImplementation = CategoryCommissionImplementation;
class ProductCommissionImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
}
exports.ProductCommissionImplementation = ProductCommissionImplementation;
