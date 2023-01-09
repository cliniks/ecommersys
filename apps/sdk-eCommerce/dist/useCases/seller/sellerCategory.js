"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerCategory = void 0;
const services_1 = require("../../services");
const category_1 = require("../../services/mutations/category");
const utils_1 = require("../../utils");
class sellerCategory {
    async getSingle(key, value) {
        return await (0, utils_1.Try)(category_1.categoryMutation.getSingle, key, value);
    }
    async getMyCategories(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyCategories, props);
    }
    async create(data) {
        return await (0, utils_1.Try)(category_1.categoryMutation.create, data);
    }
    async update(categoryId, data) {
        return await (0, utils_1.Try)(category_1.categoryMutation.update, categoryId, data);
    }
    async cancel(categoryId) {
        return await (0, utils_1.Try)(category_1.categoryMutation.cancel, categoryId);
    }
}
exports.sellerCategory = sellerCategory;
