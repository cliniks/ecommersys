"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponRepository = void 0;
const coupon_entitie_1 = require("../../entities/coupon.entitie");
const ConnectRepo_1 = require("./ConnectRepo");
const CrudRepo_1 = require("./CrudRepo");
class CouponRepository extends ConnectRepo_1.ConnectRepo {
    constructor() {
        super();
        this.model = this.coupons.model("coupons", coupon_entitie_1.CouponSchema);
        this.crud = new CrudRepo_1.CrudRepo(this.model);
        this.getOne = ({ key, value }) => this.crud.getOne({ key, value });
        this.getAll = (props) => this.crud.getAll(props);
        this.addOne = (data) => this.crud.addOne(data);
        this.update = (id, data) => this.crud.update(id, data);
        this.delete = (id) => this.crud.delete(id);
    }
}
exports.CouponRepository = CouponRepository;
