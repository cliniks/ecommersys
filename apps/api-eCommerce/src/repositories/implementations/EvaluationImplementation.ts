import { Model } from "mongoose";
import { Evaluation } from "../../entities";
import {
  ICrudRepository,
  IEvaluationRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class EvaluationImplementation implements IEvaluationRepository {
  private crud: ICrudRepository<Evaluation>;

  constructor(private model: Model<Evaluation>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Evaluation) => this.crud.addOne(data);

  update = (id: string, data: Partial<Evaluation>) =>
    this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default EvaluationImplementation;
