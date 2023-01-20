"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponsUseCases = void 0;
const delete_1 = require("../CrudUseCases/delete");
const get_1 = require("../CrudUseCases/get");
const getAll_1 = require("../CrudUseCases/getAll");
const update_1 = require("../CrudUseCases/update");
const createCoupons_1 = require("./createCoupons");
const CouponRepository_1 = require("../../repositories/implementations/CouponRepository");
const coupon = new CouponRepository_1.CouponRepository();
exports.couponsUseCases = {
    FineOne: async (req, res) => await (0, get_1.get)(req, res, coupon),
    FindAll: async (req, res) => await (0, getAll_1.getAll)(req, res, coupon),
    Add: async (req, res) => await (0, createCoupons_1.createCoupon)(req, res, coupon),
    Update: async (req, res) => await (0, update_1.update)(req, res, coupon),
    Delete: async (req, res) => await (0, delete_1.del)(req, res, coupon),
};
