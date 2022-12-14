import {
  StoreSolicitate,
  StoreSolicitateSchema,
} from "../../entities/storeSolicitate.entitie";
import { getOneProps } from "../interfaces/ICrudRepository";
import { IStoreSolicitate } from "../Interfaces/IStoreSolicitate";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class StoreSolicitateRepository
  extends ConnectRepo
  implements IStoreSolicitate
{
  private model = this.sellersRepository.model(
    "storeSolicitate",
    StoreSolicitateSchema
  );

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = () => this.crud.getAll();

  addOne = (data: StoreSolicitate) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
