import { Model } from "mongoose";
import { LeadType } from "../../entities/leads.entitie";
import {
  ICrudRepository,
  getAllProps,
  getAllReturn,
  getOneProps,
} from "../Interfaces";
import { ILeadsRepository } from "../Interfaces/ILeadsRepository";
import { CrudRepo } from "./CrudRepo";

export class LeadsImplementation implements ILeadsRepository<LeadType> {
  private crud: ICrudRepository<LeadType>;

  constructor(private model: Model<LeadType>) {
    this.crud = new CrudRepo(this.model);
  }
  getOne = (props: getOneProps): Promise<LeadType> => this.crud.getOne(props);

  getAll = (props: getAllProps): Promise<getAllReturn<LeadType>> =>
    this.crud.getAll(props);

  addOne = (data: LeadType): Promise<LeadType> => this.crud.addOne(data);

  update = (id: string, data: Partial<LeadType>): Promise<LeadType> =>
    this.crud.update(id, data);

  delete = (id: string): Promise<any> => this.crud.delete(id);
}
