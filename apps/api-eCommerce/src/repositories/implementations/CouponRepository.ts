import { Coupon, CouponSchema } from "../../entities/coupon.entitie";
import { ICouponRepository } from "../Interfaces/ICouponRepository";
import { getAllProps, getOneProps } from "../interfaces/ICrudRepository";
import { ConnectRepo } from "./ConnectRepo";
import { CrudRepo } from "./CrudRepo";

export class CouponRepository extends ConnectRepo implements ICouponRepository {
  private model = this.coupons.model("coupons", CouponSchema);
  private crud = new CrudRepo(this.model);

  constructor() {
    super();
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: Coupon) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
