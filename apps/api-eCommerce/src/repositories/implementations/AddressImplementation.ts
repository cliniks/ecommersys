import { Model } from "mongoose";
import { Address } from "../../entities";
import {
  IAddressRepository,
  ICrudRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class AddressImplementation implements IAddressRepository {
  private crud: ICrudRepository<Address>;

  constructor(private model: Model<Address>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: Address) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default AddressImplementation;
