"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCommission = exports.verifyGlobalCommission = exports.verifyStoreCommission = exports.verifyCategoryCommission = exports.verifyProductCommission = void 0;
const AdminImplementation_1 = require("../../repositories/implementations/AdminImplementation");
const models_1 = require("../../repositories/models");
const monetary_1 = require("../../utils/monetary");
const adminCommissionModel = models_1.globalCommissionModel;
const adminCommissionRepo = new AdminImplementation_1.GlobalCommissionImplementation(adminCommissionModel);
const verifyProductCommission = () => { };
exports.verifyProductCommission = verifyProductCommission;
const verifyCategoryCommission = () => { };
exports.verifyCategoryCommission = verifyCategoryCommission;
const verifyStoreCommission = () => { };
exports.verifyStoreCommission = verifyStoreCommission;
const verifyGlobalCommission = async () => {
    const getActualCommission = await adminCommissionRepo.getAll({});
    return getActualCommission.result[0];
};
exports.verifyGlobalCommission = verifyGlobalCommission;
const applyCommission = async (price) => {
    const commission = await (0, exports.verifyGlobalCommission)();
    const type = commission.commissionType;
    const calcPercentageResponse = () => {
        return +price - (+commission.fixed / 100) * +commission.percentage;
    };
    const calcFixedResponse = () => {
        return price - (0, monetary_1.addDot)(+commission.fixed);
    };
    const calcFixedAndPercentageResponse = () => {
        const percentage = (0, monetary_1.addDot)((+commission.fixed / 100) * +commission.percentage);
        const fixed = price - (0, monetary_1.addDot)(+commission.fixed);
        return fixed - percentage;
    };
    const resultPrice = type === "fixed"
        ? calcPercentageResponse()
        : type === "percentage"
            ? calcFixedResponse()
            : calcFixedAndPercentageResponse();
    console.log({ resultPrice });
    return resultPrice;
};
exports.applyCommission = applyCommission;
