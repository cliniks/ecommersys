"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalUploads = void 0;
const upload_1 = require("../../../services/mutations/upload");
const utils_1 = require("../../../utils");
class GlobalUploads {
    async uploadImage(formData) {
        return await (0, utils_1.Try)(upload_1.uploadMutations.uploadImage, formData);
    }
    async uploadDoc(formData) {
        return await (0, utils_1.Try)(upload_1.uploadMutations.uploadImage, formData);
    }
}
exports.GlobalUploads = GlobalUploads;
