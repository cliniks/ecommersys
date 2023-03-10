import { Model } from "mongoose";
import {
  ICrudRepository,
  getAllProps,
  getAllReturn,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";
import { INotifyRepository } from "../Interfaces/INotifyRepository";
import { notificationTypes } from "../../entities";

export class NotifyImplementation implements INotifyRepository {
  private crud: ICrudRepository<notificationTypes>;

  constructor(private model: Model<notificationTypes>) {
    this.crud = new CrudRepo(this.model);
  }
  getOne = (props: getOneProps): Promise<notificationTypes> =>
    this.crud.getOne(props);

  getAll = (props: getAllProps): Promise<getAllReturn<notificationTypes>> =>
    this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: notificationTypes): Promise<notificationTypes> =>
    this.crud.addOne(data);

  update = (
    id: string,
    data: Partial<notificationTypes>
  ): Promise<notificationTypes> => this.crud.update(id, data);

  delete = (id: string): Promise<any> => this.crud.delete(id);
}
