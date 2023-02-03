"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDocuments = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
class userDocuments {
    async getSingle(props) {
        return (0, utils_1.Try)(services_1.userMutations.getSingleDocument, props);
    }
    async getMyDocuments(data) {
        return (0, utils_1.Try)(services_1.userMutations.getMyDocuments, data);
    }
    async addDocument(data) {
        return (0, utils_1.Try)(services_1.userMutations.addDocument, data);
    }
    async updateDocument(data) {
        return (0, utils_1.Try)(services_1.userMutations.updateDocument, data);
    }
    async deleteDocument(documentId) {
        return (0, utils_1.Try)(services_1.userMutations.deleteDocument, documentId);
    }
}
exports.userDocuments = userDocuments;
