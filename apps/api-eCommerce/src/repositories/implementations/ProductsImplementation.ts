import { Model } from "mongoose";
import { Product } from "../../entities";
import {
  ICrudRepository,
  getAllProps,
  getOneProps,
  IProductsRepository,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class ProductsImplementation implements IProductsRepository {
  private crud: ICrudRepository<Product>;

  constructor(private model: Model<Product>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value, fields }: getOneProps) =>
    this.crud.getOne({ key, value, fields });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: Product) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
export default ProductsImplementation;
