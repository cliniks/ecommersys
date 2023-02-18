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

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Product) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
export default ProductsImplementation;
