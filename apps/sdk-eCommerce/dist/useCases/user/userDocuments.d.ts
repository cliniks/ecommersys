import { DocumentsType } from "../../Entities/documents.entitie";
import { Response } from "../../Errors";
import { IUserDocument, getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { userErrors } from "../../services";
export declare class userDocuments implements IUserDocument {
    getSingle(props: getSingleProps): Promise<Response<userErrors, DocumentsType>>;
    getMyDocuments(data: getAllProps): Promise<Response<userErrors, getAllReturn<DocumentsType>>>;
    getAllDocuments(data: getAllProps): Promise<Response<userErrors, getAllReturn<DocumentsType>>>;
    addDocument(data: DocumentsType): Promise<Response<userErrors, DocumentsType>>;
    updateDocument(data: {
        documentId: string;
        data: Partial<DocumentsType>;
    }): Promise<Response<userErrors, DocumentsType>>;
    deleteDocument(documentId: {
        documentId: string;
    }): Promise<Response<userErrors, DocumentsType>>;
}
