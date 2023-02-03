"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCategories = void 0;
const category_1 = require("../../../services/mutations/category");
const utils_1 = require("../../../utils");
class GlobalCategories {
    async getSingle(props) {
        return await (0, utils_1.Try)(category_1.categoryMutation.getSingle, props);
    }
    async getAll(props) {
        return await (0, utils_1.Try)(category_1.categoryMutation.getAllCategories, props);
    }
    async getAllGlobals(props) {
        return await (0, utils_1.Try)(category_1.categoryMutation.getAllGlobalCategories, props);
    }
}
exports.GlobalCategories = GlobalCategories;
