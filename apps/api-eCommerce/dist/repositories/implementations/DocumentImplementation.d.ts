import { Model } from "mongoose";
import { DocumentsType } from "../../entities";
import { IDocumentRepository, getAllProps, getOneProps } from "../Interfaces";
declare class DocumentImplementation implements IDocumentRepository {
    private model;
    private crud;
    constructor(model: Model<DocumentsType>);
    getOne: ({ key, value }: getOneProps) => Promise<DocumentsType>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<DocumentsType>>;
    getMany: (ids: string[], fields?: string) => Promise<DocumentsType[]>;
    addOne: (data: DocumentsType) => Promise<DocumentsType>;
    update: (id: string, data: any) => Promise<DocumentsType>;
    delete: (id: string) => Promise<any>;
}
export default DocumentImplementation;
