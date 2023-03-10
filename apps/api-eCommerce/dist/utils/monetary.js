"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDot = exports.convertNumberWithDecimals = void 0;
const convertNumberWithDecimals = (str) => {
    var re = /\b(\d+)(\d{2})\b/;
    var subst = "$1.$2";
    var result = str.replace(re, subst);
    return result;
};
exports.convertNumberWithDecimals = convertNumberWithDecimals;
const addDot = (str) => {
    let convertedStr = str.toString();
    if (convertedStr.includes("."))
        return +str;
    convertedStr =
        convertedStr.substring(0, convertedStr.length - 2) +
            "." +
            convertedStr.substring(convertedStr.length - 2);
    console.log(convertedStr);
    return +convertedStr;
};
exports.addDot = addDot;
