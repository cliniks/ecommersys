"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchManyCoupons = void 0;
const repositories_1 = require("../../repositories");
const couponRepo = repositories_1.CouponsRepository;
const fetchManyCoupons = async (idArray, fields) => {
    return await couponRepo.getMany(idArray, fields);
};
exports.fetchManyCoupons = fetchManyCoupons;
