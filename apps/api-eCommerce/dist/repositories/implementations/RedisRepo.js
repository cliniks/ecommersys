"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisImplementation = void 0;
const redis = __importStar(require("redis"));
class RedisImplementation {
    constructor() {
        this.client = redis.createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: parseInt(`${process.env.REDIS_PORT}`),
            },
            password: process.env.REDIS_PASS,
        });
        this.client.connect();
        this.client.on("error", (err) => console.log(err));
    }
    async insertData(key, value) {
        try {
            await this.client.hSet(key, { code: value });
        }
        catch (err) {
            console.log(err);
        }
    }
    async insertString(key, value) {
        try {
            await this.client.set(key, value);
        }
        catch (err) {
            console.log(err);
        }
    }
    async updateData(key, value) {
        await this.client.set(key, value);
    }
    async removeData(key) {
        await this.client.del(key);
    }
    async getData(key) {
        try {
            return await this.client.get(key);
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async getHashData(key, field) {
        try {
            if (field) {
                return await this.client.hGet(key, field);
            }
            else {
                return await this.client.hGetAll(key);
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}
exports.RedisImplementation = RedisImplementation;
