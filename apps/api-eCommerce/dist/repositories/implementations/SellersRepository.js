"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellersRepository = void 0;
const store_entitie_1 = require("../../entities/store.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class SellersRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.model = this.sellers.model("sellers", store_entitie_1.StoreSchema);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (props) => this.crud.getAll(props);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
    }
}
exports.SellersRepository = SellersRepository;
