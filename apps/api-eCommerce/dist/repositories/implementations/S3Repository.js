"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Repository = void 0;
const fs_1 = __importDefault(require("fs"));
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const connectS3_1 = require("../../config/connectS3");
class S3Repository {
    constructor() {
        this.s3 = new s3_1.default({
            region: connectS3_1.s3Config.region,
            accessKeyId: connectS3_1.s3Config.accessKeyId,
            secretAccessKey: connectS3_1.s3Config.secretAccessKey,
        });
        this.deleteFile = async (file) => {
            try {
                const fileName = file.split("/")[3];
                const uploadParams = {
                    Bucket: connectS3_1.s3Config.bucketName,
                    Key: fileName,
                };
                return this.s3.deleteObject(uploadParams).promise();
            }
            catch (error) {
                return error;
            }
        };
    }
    async uploadImage(file) {
        const fileStream = fs_1.default.createReadStream(file.path);
        const uploadParams = {
            Bucket: connectS3_1.s3Config.bucketName,
            Body: fileStream,
            Key: `Cliniks/Imagens/${file.originalname}`,
        };
        return this.s3.upload(uploadParams).promise();
    }
}
exports.S3Repository = S3Repository;
