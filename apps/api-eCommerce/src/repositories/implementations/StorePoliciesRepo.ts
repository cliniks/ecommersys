import { StorePoliciesSchema } from "../../entities/store.policies.entitie";
import { StoreSolicitate } from "../../entities/storeSolicitate.entitie";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { IStorePolicyRepository } from "../Interfaces/IStorePolicyRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class StorePoliciesRepository
  extends ConnectRepo
  implements IStorePolicyRepository
{
  private model = this.sellerSolicitations.model(
    "sellerPolicies",
    StorePoliciesSchema
  );

  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: StoreSolicitate) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
