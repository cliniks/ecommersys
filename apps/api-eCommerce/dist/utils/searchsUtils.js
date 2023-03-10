"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMyOwnUserInMySearch = exports.addMyOwnStoreInMySearch = void 0;
const addMyOwnStoreInMySearch = (filter, user) => {
    const filterStringAdjust = typeof filter === "string" ? JSON.parse(filter) : filter;
    let adjustedFilter = {
        key: "owner" + " " + filterStringAdjust.key,
        value: user.storeId + " " + filterStringAdjust.value,
        fields: filterStringAdjust.fields,
    };
    return adjustedFilter;
};
exports.addMyOwnStoreInMySearch = addMyOwnStoreInMySearch;
const addMyOwnUserInMySearch = (filter, user) => {
    const filterStringAdjust = typeof filter === "string" ? JSON.parse(filter) : filter;
    let adjustedFilter = {
        key: "owner" + " " + filterStringAdjust.key,
        value: user._id + " " + filterStringAdjust.value,
        fields: filterStringAdjust.fields,
    };
    return adjustedFilter;
};
exports.addMyOwnUserInMySearch = addMyOwnUserInMySearch;
