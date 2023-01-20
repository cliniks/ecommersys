import { AddressSchema } from "../../entities/address.entitie";
import { Cart } from "../../entities/cart.entitie";
import { IAddressRepository } from "../Interfaces/IAddressRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class AddressRepository
  extends ConnectRepo
  implements IAddressRepository
{
  private model = this.carts.model("address", AddressSchema);
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
