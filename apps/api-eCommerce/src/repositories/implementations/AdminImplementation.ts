import { Model } from "mongoose";
import {
  GlobalCommissionType,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
} from "../../entities";
import {
  ICategoryCommission,
  ICrudRepository,
  IGlobalCommission,
  IProductCommission,
  IStoreCommission,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

export class GlobalCommissionImplementation implements IGlobalCommission {
  private crud: ICrudRepository<GlobalCommissionType>;

  constructor(private model: Model<GlobalCommissionType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: GlobalCommissionType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export class StoreCommissionImplementation implements IStoreCommission {
  private crud: ICrudRepository<storeCommissionType>;

  constructor(private model: Model<storeCommissionType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: storeCommissionType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export class CategoryCommissionImplementation implements ICategoryCommission {
  private crud: ICrudRepository<categoryCommissionType>;

  constructor(private model: Model<categoryCommissionType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: categoryCommissionType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export class ProductCommissionImplementation implements IProductCommission {
  private crud: ICrudRepository<productCommissionType>;

  constructor(private model: Model<productCommissionType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  getAll = (pagFilter: getAllProps) => this.crud.getAll(pagFilter);

  addOne = (data: productCommissionType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
