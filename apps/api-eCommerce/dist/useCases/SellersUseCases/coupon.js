"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCoupon = exports.deleteCoupon = exports.createCoupon = exports.getMyCoupons = void 0;
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const CouponRepository_1 = require("../../repositories/implementations/CouponRepository");
const coupons = new CouponRepository_1.CouponRepository();
const getMyCoupons = async (req, res) => {
    try {
        let { page, size, filter } = req.query;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        filter = {
            key: `owner ${filter === null || filter === void 0 ? void 0 : filter.key}`,
            value: `${user.storeId}  ${filter === null || filter === void 0 ? void 0 : filter.value}`,
            fields: "",
        };
        const findMyCoupons = await coupons.getAll({ page, size, filter });
        res.json(findMyCoupons);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.getMyCoupons = getMyCoupons;
const createCoupon = async (req, res) => {
    try {
        const create = await coupons.addOne(req.body);
        res.json(create);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.createCoupon = createCoupon;
const deleteCoupon = async (req, res) => {
    try {
        const { couponId } = req.body;
        const remove = await coupons.delete(couponId);
        res.json(remove);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.deleteCoupon = deleteCoupon;
const updateCoupon = async (req, res) => {
    try {
        const { couponId, data } = req.body;
        const update = await coupons.update(couponId, data);
        return update;
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.updateCoupon = updateCoupon;
