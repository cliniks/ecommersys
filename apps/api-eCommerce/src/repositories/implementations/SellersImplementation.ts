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

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Store) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default SellersImplementation;
