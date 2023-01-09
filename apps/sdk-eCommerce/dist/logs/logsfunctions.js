"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = (msg) => {
    if (msg) {
        console.log();
        console.log(`--- ${msg} ---`);
        console.log();
    }
    return {
        clear: () => {
            console.clear();
            console.log();
            console.log(msg ? `--- ${msg} ---` : "--- Console Limpo ---");
            console.log();
        },
    };
};
exports.log = log;
