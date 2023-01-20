"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerCategory = void 0;
const services_1 = require("../../services");
const category_1 = require("../../services/mutations/category");
const utils_1 = require("../../utils");
class sellerCategory {
    async getSingle(props) {
        return await (0, utils_1.Try)(category_1.categoryMutation.getSingle, props);
    }
    async getMyCategories(props) {
        return await (0, utils_1.Try)(services_1.sellerMutations.getMyCategories, props);
    }
    async create(data) {
        return await (0, utils_1.Try)(category_1.categoryMutation.create, data);
    }
    async update(props) {
        return await (0, utils_1.Try)(category_1.categoryMutation.update, props);
    }
    async cancel({ categoryId, }) {
        return await (0, utils_1.Try)(category_1.categoryMutation.cancel, categoryId);
    }
}
exports.sellerCategory = sellerCategory;
