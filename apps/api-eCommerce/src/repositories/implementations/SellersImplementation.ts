import { Model } from "mongoose";
import { Store } from "../../entities";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
  ISellersRepository,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class SellersImplementation implements ISellersRepository {
  private crud: ICrudRepository<Store>;

  constructor(private model: Model<Store>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value, fields }: getOneProps) =>
    this.crud.getOne({ key, value, fields });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: Store) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default SellersImplementation;
