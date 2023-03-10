import { PaymentMethodType } from "../../entities/paymentMethod.entitie";
import { ICrudRepository } from "./ICrudRepository";
export interface IPaymentMethods extends ICrudRepository<PaymentMethodType> {
}
