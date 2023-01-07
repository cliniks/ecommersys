import { Store, StoreSchema } from "../../entities/store.entitie";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ISellersRepository } from "../Interfaces/ISellersRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class SellersRepository
  extends ConnectRepo
  implements ISellersRepository
{
  private model = this.sellersRepository.model("sellers", StoreSchema);

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Store) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
