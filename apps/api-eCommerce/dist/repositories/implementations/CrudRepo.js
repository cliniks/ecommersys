"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRepo = void 0;
const numberMethods_1 = require("../../utils/numberMethods");
class CrudRepo {
    constructor(model) {
        this.model = model;
    }
    async getOne({ key, value }) {
        return await this.model.findOne({ [key]: value });
    }
    async getAll({ page = 1, size = 10, filter }) {
        var _a, _b;
        const fields = (filter === null || filter === void 0 ? void 0 : filter.fields) ? filter === null || filter === void 0 ? void 0 : filter.fields : "";
        const filterValue = filter === null || filter === void 0 ? void 0 : filter.value;
        const arrayFromKeys = filterValue ? (_a = filter.key) === null || _a === void 0 ? void 0 : _a.split(" ") : [];
        const arrayFromKeyValues = filterValue ? (_b = filter === null || filter === void 0 ? void 0 : filter.value) === null || _b === void 0 ? void 0 : _b.split(" ") : [];
        // const includesIsActive = arrayFromKeys?.includes("isActive");
        // if (!includesIsActive) {
        //   arrayFromKeys?.push("isActive");
        //   arrayFromKeyValues.push("true");
        // }
        const splitedObjects = arrayFromKeys === null || arrayFromKeys === void 0 ? void 0 : arrayFromKeys.map((item, index) => ({
            key: item,
            value: arrayFromKeyValues[index],
        }));
        let query = {};
        splitedObjects === null || splitedObjects === void 0 ? void 0 : splitedObjects.map((item) => {
            if (item) {
                const prepareValue = prepareFilterQuery({ filter: item });
                query = Object.assign(Object.assign({}, query), prepareValue);
            }
        });
        console.log(Object.assign({}, query));
        let data = await this.model
            .find(query)
            .sort({ register: -1 })
            .skip(+size * (+page > 0 ? +page - 1 : 0))
            .limit(+size)
            .select(fields);
        const count = await this.model.countDocuments(data);
        let obj = {
            result: data,
            totalItems: +count,
            pageSize: +size,
            thisPage: +page + 1,
            totalPage: +count > +size ? Math.ceil(+count / +size) : 1,
        };
        return obj;
    }
    async addOne(data) {
        return (await this.model.create(data)).save();
    }
    async update(id, data) {
        await this.model.findByIdAndUpdate(id, data);
        return await this.getOne({ key: "_id", value: id });
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}
exports.CrudRepo = CrudRepo;
const prepareFilterQuery = ({ filter }) => {
    const verifyFilter = filter
        ? typeof filter === "string"
            ? JSON.parse(filter)
            : filter
        : {};
    if (!verifyFilter)
        return {};
    const filterValue = verifyFilter.value;
    if (!filterValue)
        return {};
    const filterValueIsBool = typeof filterValue === "boolean" || ["true", "false"].includes(filterValue);
    const filterValueIsNumber = (0, numberMethods_1.verifyIsNumber)(filterValue);
    if ((filterValueIsNumber || filterValueIsBool) &&
        typeof filterValue !== "object") {
        return { [verifyFilter.key]: filterValue };
    }
    const regEx = new RegExp(filterValue, "i");
    return {
        [verifyFilter.key]: { $regex: regEx },
    };
};
