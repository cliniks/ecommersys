"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const user_entitie_1 = require("../../entities/user.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class UsersRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.model = this.users.model("users", user_entitie_1.UserSchema);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (props) => this.crud.getAll(props);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
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
exports.UsersRepository = UsersRepository;
