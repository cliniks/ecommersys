import { Model } from "mongoose";
import { Category } from "../../entities";
import {
  ICategoryRepository,
  ICrudRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class CategoryImplementation implements ICategoryRepository {
  private crud: ICrudRepository<Category>;

  constructor(private model: Model<Category>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Category) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
export default CategoryImplementation;
