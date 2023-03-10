"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = async () => await mongoose_1.default.connect(`${process.env.MONGO_ATLAS_DB_CONNECTION}`);
exports.connection = connection;
const createConnection = (db) => mongoose_1.default.createConnection(`${process.env.MONGO_ATLAS_DB_CONNECTION}`, {
    dbName: db,
});
exports.createConnection = createConnection;
