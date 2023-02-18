import { Model } from "mongoose";

import { ICrudRepository, getAllProps, getOneProps } from "../Interfaces";
import { CrudRepo } from "./CrudRepo";
import { PaymentMethodType } from "../../entities/paymentMethod.entitie";
import { IPaymentMethods } from "../Interfaces/IPaymentMethodsRepository";

class PaymentMethodsImplementation implements IPaymentMethods {
  private crud: ICrudRepository<PaymentMethodType>;

  constructor(private model: Model<PaymentMethodType>) {
    this.crud = new CrudRepo(this.model);
  }

  getOne = ({ key, value }: getOneProps) => this.crud.getOne({ key, value });

  getAll = (props: getAllProps) => this.crud.getAll(props);

  addOne = (data: PaymentMethodType) => this.crud.addOne(data);

  update = (id: string, data: any) => this.crud.update(id, data);

  delete = (id: string) => this.crud.delete(id);
}
export default PaymentMethodsImplementation;
