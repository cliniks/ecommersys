import { Model } from "mongoose";
import { StoreSolicitate } from "../../entities";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
  IStoreSolicitate,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class StoreSolicitateImplementation implements IStoreSolicitate {
  private crud: ICrudRepository<StoreSolicitate>;

  constructor(private model: Model<StoreSolicitate>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: StoreSolicitate) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default StoreSolicitateImplementation;
