"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponsUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const createCoupons_1 = require("./createCoupons");
const repositories_1 = require("../../repositories");
const CrudUseCases_1 = require("../CrudUseCases");
const getMany_1 = require("../CrudUseCases/getMany");
const coupon = repositories_1.CouponsRepository;
exports.couponsUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, coupon),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, coupon),
    findMany: async (req, res) => await (0, getMany_1.getMany)(req, res, coupon),
    Add: async (req, res) => await (0, createCoupons_1.createCoupon)(req, res, coupon),
    Update: async (req, res) => await (0, update_1.update)(req, res, coupon),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, coupon),
};
class CouponUseCases extends CrudUseCases_1.CrudUseCases {
    constructor() {
        super(coupon);
    }
}
exports.default = new CouponUseCases();
