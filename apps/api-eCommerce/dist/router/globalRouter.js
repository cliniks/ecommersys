"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = void 0;
const express_1 = require("express");
const S3Repository_1 = require("../repositories/implementations/S3Repository");
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const verifyers_1 = require("../middlewares/verifyers");
const upload = (0, multer_1.default)({ dest: "uploads/" });
const unlinkFile = util_1.default.promisify(fs_1.default.unlink);
const S3 = new S3Repository_1.S3Repository();
const globalRouter = (0, express_1.Router)();
exports.globalRouter = globalRouter;
globalRouter.post("/addImage", verifyers_1.verifyers.verifyToken, upload.single("img"), async (req, res) => {
    try {
        const file = req.file;
        const upload = await S3.uploadImage(file);
        unlinkFile(file.path);
        res.json(upload.Location);
    }
    catch (err) {
        res.status(400).send(false);
    }
});
