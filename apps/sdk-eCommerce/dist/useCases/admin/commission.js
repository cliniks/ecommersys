"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCommission = exports.CategoryCommission = exports.ProductCommission = exports.GlobalCommission = exports.commission = void 0;
const commission_1 = require("../../services/mutations/commission");
const utils_1 = require("../../utils");
class commission {
    constructor() {
        this.Global = new GlobalCommission();
        this.Product = new ProductCommission();
        this.Category = new CategoryCommission();
        this.Store = new StoreCommission();
    }
}
exports.commission = commission;
class GlobalCommission {
    constructor() {
        this.getSingle = async (props) => (0, utils_1.Try)(commission_1.commissions.GlobalCommission.getSingle, props);
        this.getAll = async (props) => (0, utils_1.Try)(commission_1.commissions.GlobalCommission.getAll, props);
        this.updateOne = (props) => (0, utils_1.Try)(commission_1.commissions.GlobalCommission.update, props);
    }
}
exports.GlobalCommission = GlobalCommission;
class ProductCommission {
    constructor() {
        this.getSingle = async (props) => (0, utils_1.Try)(commission_1.commissions.ProductCommission.getSingle, props);
        this.getByStore = async (storeId) => (0, utils_1.Try)(commission_1.commissions.ProductCommission.getByStore, storeId);
        this.add = async (data) => (0, utils_1.Try)(commission_1.commissions.ProductCommission.add, data);
        this.getAll = async (props) => (0, utils_1.Try)(commission_1.commissions.ProductCommission.getAll, props);
        this.updateOne = (props) => (0, utils_1.Try)(commission_1.commissions.ProductCommission.update, props);
    }
}
exports.ProductCommission = ProductCommission;
class CategoryCommission {
    constructor() {
        this.getSingle = async (props) => (0, utils_1.Try)(commission_1.commissions.CategoryCommission.getSingle, props);
        this.getByStore = async (storeId) => (0, utils_1.Try)(commission_1.commissions.CategoryCommission.getByStore, storeId);
        this.add = async (data) => (0, utils_1.Try)(commission_1.commissions.CategoryCommission.add, data);
        this.getAll = async (props) => (0, utils_1.Try)(commission_1.commissions.CategoryCommission.getAll, props);
        this.updateOne = (props) => (0, utils_1.Try)(commission_1.commissions.CategoryCommission.update, props);
    }
}
exports.CategoryCommission = CategoryCommission;
class StoreCommission {
    constructor() {
        this.getSingle = async (props) => (0, utils_1.Try)(commission_1.commissions.StoreCommission.getSingle, props);
        this.add = async (data) => (0, utils_1.Try)(commission_1.commissions.StoreCommission.add, data);
        this.getAll = async (props) => (0, utils_1.Try)(commission_1.commissions.StoreCommission.getAll, props);
        this.updateOne = (props) => (0, utils_1.Try)(commission_1.commissions.StoreCommission.update, props);
    }
}
exports.StoreCommission = StoreCommission;
