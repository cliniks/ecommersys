import {
  Evaluation,
  EvaluationSchema,
} from "../../entities/evaluation.entitie";
import { IEvaluationRepository } from "../Interfaces/IEvaluationRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class EvaluationRepository
  extends ConnectRepo
  implements IEvaluationRepository
{
  private model = this.users.model("evaluations", EvaluationSchema);
  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Evaluation) => this.crud.addOne(data);

  update = (id: string, data: Partial<Evaluation>) =>
    this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
