"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseRetryOptions = exports.dbconfig = void 0;
exports.dbconfig = {
    url: `${process.env.MONGO_DB_CONNECTION}`,
    user: {
        authSource: `${process.env.DB_HOST_USER}`,
        authMongo: {
            user: process.env.DB_USERNAME_USER,
            pass: process.env.DB_PASSWORD_USER,
        },
    },
    seller: {
        authSource: `${process.env.DB_HOST_SELLER}`,
        authMongo: {
            user: process.env.DB_USERNAME_SELLER,
            pass: process.env.DB_PASSWORD_SELLER,
        },
    },
    sales: {
        authSource: `${process.env.DB_HOST_SALE}`,
        authMongo: {
            user: process.env.DB_USERNAME_SALE,
            pass: process.env.DB_PASSWORD_SALE,
        },
    },
    cart: {
        authSource: `${process.env.DB_HOST_CART}`,
        authMongo: {
            user: process.env.DB_USERNAME_CART,
            pass: process.env.DB_PASSWORD_CART,
        },
    },
    products: {
        authSource: `${process.env.DB_HOST_PRODUCTS}`,
        authMongo: {
            user: process.env.DB_USERNAME_PRODUCTS,
            pass: process.env.DB_PASSWORD_PRODUCTS,
        },
    },
};
exports.promiseRetryOptions = {
    factor: 2,
    maxTimeout: 5000,
};
