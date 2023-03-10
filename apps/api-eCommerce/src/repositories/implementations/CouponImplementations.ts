import { Model } from "mongoose";
import { Coupon } from "../../entities";
import {
  ICouponRepository,
  ICrudRepository,
  getAllProps,
  getOneProps,
} from "../Interfaces";
import { CrudRepo } from "./CrudRepo";

class CouponImplementation implements ICouponRepository {
  private crud: ICrudRepository<Coupon>;

  constructor(private model: Model<Coupon>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value, fields }: getOneProps) =>
    this.crud.getOne({ key, value, fields });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  getMany = (ids: string[], fields?: string) => this.crud.getMany(ids, fields);

  addOne = (data: Coupon) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default CouponImplementation;
