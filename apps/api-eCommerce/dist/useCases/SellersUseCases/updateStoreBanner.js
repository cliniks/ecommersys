"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStoreBanner = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const S3Repository_1 = require("../../repositories/implementations/S3Repository");
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const unlinkFile = util_1.default.promisify(fs_1.default.unlink);
const updateStoreBanner = async (req, res, repo) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const upload = new S3Repository_1.S3Repository();
        const file = req.file;
        const uploadedLinks = async () => {
            const submit = await upload.uploadImage(file);
            unlinkFile(file.path);
            return Promise.resolve(submit);
        };
        const findMyStore = await repo.getOne({
            key: "_id",
            value: user.storeId,
        });
        const filePath = (await uploadedLinks()).Location;
        const storeUploaded = await repo.update(findMyStore._id, {
            banner: filePath,
        });
        res.json(storeUploaded);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.updateStoreBanner = updateStoreBanner;
