"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRepo = void 0;
class CrudRepo {
    constructor(model) {
        this.model = model;
    }
    async getOne({ key, value, fields }) {
        const fieldsAdjust = (fields === null || fields === void 0 ? void 0 : fields.includes(","))
            ? fields.replaceAll(",", " ")
            : "";
        const get = await this.model
            .findOne({ [key]: value })
            .select(fieldsAdjust);
        return get;
    }
    async getMany(idArray, fields) {
        if (!idArray || idArray.length === 0)
            return [];
        const verifyArray = idArray.map((item) => {
            const includesSlash = item.includes("/");
            console.log({ includesSlash });
            if (includesSlash) {
                return item.split("/")[0];
            }
            return item;
        });
        const fieldsAdjust = (fields === null || fields === void 0 ? void 0 : fields.includes(","))
            ? fields.replace(",", " ")
            : fields;
        return await this.model
            .find({ _id: { $in: verifyArray } })
            .select(fieldsAdjust);
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
        let query = [];
        splitedObjects === null || splitedObjects === void 0 ? void 0 : splitedObjects.forEach((item) => {
            if (item) {
                const prepareValue = prepareFilterQuery({ filter: item });
                query.push(prepareValue);
            }
        });
        console.log("query", query);
        let data = await this.model
            .find(query.length > 0 ? { $and: query } : {})
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
        const add = await this.model.create(data);
        const newDoc = add.save();
        return newDoc;
    }
    async update(id, data) {
        await this.model.findByIdAndUpdate(id, data);
        return await this.model.findById(id);
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
    if (!filterValue || filterValue === undefined || filterValue === "undefined")
        return {};
    const filterValueIsBool = typeof filterValue === "boolean" || ["true", "false"].includes(filterValue);
    // const filterValueIsNumber = verifyIsNumber(filterValue);
    const filterValueIsNumber = typeof filterValue === "number";
    if ((filterValueIsNumber || filterValueIsBool) &&
        typeof filterValue !== "object") {
        return { [verifyFilter.key]: filterValue };
    }
    const regEx = new RegExp(filterValue, "i");
    if (verifyFilter.key === "startDate") {
        return { createdAt: { $gte: new Date(filterValue) } };
    }
    if (verifyFilter.key === "endDate") {
        return { createdAt: { $lte: new Date(filterValue) } };
    }
    if (verifyFilter.key === "startEdit") {
        return { updatedAt: { $gte: new Date(filterValue) } };
    }
    if (verifyFilter.key === "endEdit") {
        return { updatedAt: { $lte: new Date(filterValue) } };
    }
    if (verifyFilter.key === "minPrice") {
        return {
            $expr: { $gte: [{ $toDouble: "$price" }, +verifyFilter.value || 0] },
        };
    }
    if (verifyFilter.key === "maxPrice") {
        return {
            $expr: { $lte: [{ $toDouble: "$price" }, +verifyFilter.value || 2000] },
        };
    }
    if (verifyFilter.key === "_id" || verifyFilter.key === "access") {
        const value = !isNaN(verifyFilter.value)
            ? +verifyFilter.value
            : verifyFilter.value;
        return {
            [verifyFilter.key]: value,
        };
    }
    return {
        [verifyFilter.key]: { $regex: regEx },
    };
};
