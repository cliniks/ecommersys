import { DocumentsType } from "../../Entities/documents.entitie";
import { Response } from "../../Errors";
import {
  IUserDocument,
  getAllProps,
  getAllReturn,
  getSingleProps,
} from "../../interfaces";
import { userErrors, userMutations } from "../../services";
import { Try } from "../../utils";

export class userDocuments implements IUserDocument {
  async getSingle(
    props: getSingleProps
  ): Promise<Response<userErrors, DocumentsType>> {
    return Try(userMutations.getSingleDocument, props);
  }
  async getMyDocuments(
    data: getAllProps
  ): Promise<Response<userErrors, getAllReturn<DocumentsType>>> {
    return Try(userMutations.getMyDocuments, data);
  }
  async addDocument(
    data: DocumentsType
  ): Promise<Response<userErrors, DocumentsType>> {
    return Try(userMutations.addDocument, data);
  }
  async updateDocument(data: {
    documentId: string;
    data: Partial<DocumentsType>;
  }): Promise<Response<userErrors, DocumentsType>> {
    return Try(userMutations.updateDocument, data);
  }
  async deleteDocument(
    documentId: string
  ): Promise<Response<userErrors, DocumentsType>> {
    return Try(userMutations.deleteDocument, documentId);
  }
}
