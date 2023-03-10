"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckout = void 0;
const createCheckout = (req, res, repo) => {
    try {
        res.json(true);
    }
    catch (err) {
        res.json(false);
    }
};
exports.createCheckout = createCheckout;
