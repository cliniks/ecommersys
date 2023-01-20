"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesRepository = void 0;
const sales_entitie_1 = require("../../entities/sales.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class SalesRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.model = this.orders.model("orders", sales_entitie_1.SalesSchema);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (props) => this.crud.getAll(props);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
    }
}
exports.SalesRepository = SalesRepository;
