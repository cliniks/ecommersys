import { Model } from "mongoose";
import { DocumentsType } from "../../entities";
import {
  ICrudRepository,
  IDocumentRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class DocumentImplementation implements IDocumentRepository {
  private crud: ICrudRepository<DocumentsType>;

  constructor(private model: Model<DocumentsType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: DocumentsType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default DocumentImplementation;
