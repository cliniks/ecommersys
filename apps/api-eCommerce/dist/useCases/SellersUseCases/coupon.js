"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCoupon = exports.deleteCoupon = exports.createCoupon = exports.getMyCoupons = void 0;
// import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
const getMyCoupons_1 = require("./getMyCoupons");
const repositories_1 = require("../../repositories");
const coupons = repositories_1.CouponsRepository;
const getMyCoupons = async (req, res) => (0, getMyCoupons_1.getMyCouponsFunc)(req, res);
exports.getMyCoupons = getMyCoupons;
const createCoupon = async (req, res) => {
    try {
        const create = await coupons.addOne(req.body);
        return res.json(create);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.createCoupon = createCoupon;
const deleteCoupon = async (req, res) => {
    try {
        const { couponId } = req.body;
        const remove = await coupons.delete(couponId);
        return res.json(remove);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.deleteCoupon = deleteCoupon;
const updateCoupon = async (req, res) => {
    try {
        const { couponId, data } = req.body;
        const update = await coupons.update(couponId, data);
        return res.json(update);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível solicitar.");
    }
};
exports.updateCoupon = updateCoupon;
