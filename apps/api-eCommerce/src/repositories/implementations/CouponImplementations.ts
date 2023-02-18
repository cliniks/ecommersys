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

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Coupon) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}

export default CouponImplementation;
