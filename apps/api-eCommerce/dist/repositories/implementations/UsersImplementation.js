"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrudRepo_1 = require("./CrudRepo");
class UsersImplementation {
    constructor(model) {
        this.model = model;
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (props) => this.crud.getAll(props);
        this.getMany = (ids, fields) => this.crud.getMany(ids, fields);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
    }
    async updateImage(user, img) {
        await this.model.findByIdAndUpdate(user._id, { img });
        return await this.model.findById(user._id);
    }
    async updateUserInfo(user, info) {
        await this.model.findByIdAndUpdate(user._id, {
            userInfo: Object.assign(Object.assign({}, user.userInfo), info),
        });
        return await this.model.findById(user._id);
    }
}
exports.default = UsersImplementation;
