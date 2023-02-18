import { Model } from "mongoose";
import { Sales } from "../../entities";
import {
  getAllProps,
  getOneProps,
  ICrudRepository,
  ISalesRepository,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class SalesImplementation implements ISalesRepository {
  private crud: ICrudRepository<Sales>;

  constructor(private model: Model<Sales>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Sales) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default SalesImplementation;
