import { Sales, SalesSchema } from "../../entities/sales.entitie";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ISalesRepository } from "../interfaces/ISalesRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class SalesRepository extends ConnectRepo implements ISalesRepository {
  private model = this.orders.model("orders", SalesSchema);

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Sales) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
