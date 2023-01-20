"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsRepository = void 0;
const cart_entitie_1 = require("../../entities/cart.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class CartsRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.model = this.carts.model("carts", cart_entitie_1.CartSchema);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (pagFilter) => this.crud.getAll(pagFilter);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
    }
}
exports.CartsRepository = CartsRepository;
