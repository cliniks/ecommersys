import { Model } from "mongoose";
import { getAllProps, getOneProps, ICrudRepository } from "../Interfaces";
import { CrudRepo } from "./CrudRepo";
import { IOrdersRepository } from "../Interfaces/IOrdersRepository";
import { OrderType } from "../../entities/order.entitie";

class OrdersImplementation implements IOrdersRepository {
  private crud: ICrudRepository<OrderType>;

  constructor(private model: Model<OrderType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: OrderType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default OrdersImplementation;
