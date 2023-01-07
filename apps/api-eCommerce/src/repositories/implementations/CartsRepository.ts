import { Cart, CartSchema } from "../../entities/cart.entitie";
import { ICartsRepository } from "../interfaces/ICartsRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class CartsRepository extends ConnectRepo implements ICartsRepository {
  private model = this.cartsRepository.model("carts", CartSchema);
  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: Cart) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
