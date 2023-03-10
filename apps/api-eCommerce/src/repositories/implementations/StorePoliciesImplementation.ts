import { Model } from "mongoose";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
  IStorePolicyRepository,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";
import { StorePolicy } from "../../entities";

class StorePoliciesImplementation implements IStorePolicyRepository {
  private crud: ICrudRepository<StorePolicy>;

  constructor(private model: Model<StorePolicy>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: StorePolicy) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default StorePoliciesImplementation;
