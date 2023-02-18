import { Model } from "mongoose";
import { Cart } from "../../entities";
import {
  ICartsRepository,
  ICrudRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class CartsImplementation implements ICartsRepository {
  private crud: ICrudRepository<Cart>;

  constructor(private model: Model<Cart>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: Cart) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
export default CartsImplementation;
