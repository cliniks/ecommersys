"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTokenData = exports.insertUserData = exports.initiateUser = exports.getUserCache = void 0;
const RedisRepo_1 = require("../repositories/implementations/RedisRepo");
const Redis = new RedisRepo_1.RedisImplementation();
const initiateUserObj = { code: "0" };
const initiateUser = async (key) => {
    await Redis.insertData(key, initiateUserObj);
    return Redis.getHashData(key);
};
exports.initiateUser = initiateUser;
const getUserCache = async (key) => {
    const getClient = await Redis.getHashData(key);
    const client = getClient;
    console.log(client);
    if (client.code)
        return client;
    initiateUser(key);
    return (await Redis.getHashData(key));
};
exports.getUserCache = getUserCache;
const insertUserData = async (key, data) => {
    try {
        await Redis.insertData(key, Object.assign({}, data));
        return await Redis.getHashData(key);
    }
    catch (err) {
        console.log("não pode inserir");
    }
};
exports.insertUserData = insertUserData;
const getUserTokenData = async (email) => {
    const getToken = await Redis.getHashData(email);
    return getToken.code;
};
exports.getUserTokenData = getUserTokenData;
