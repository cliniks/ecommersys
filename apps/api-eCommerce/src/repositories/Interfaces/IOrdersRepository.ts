import { ICrudRepository } from ".";
import { OrderType } from "../../entities/order.entitie";

export interface IOrdersRepository extends ICrudRepository<OrderType> {}
