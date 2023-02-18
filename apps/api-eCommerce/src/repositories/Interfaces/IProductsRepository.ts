import { ICrudRepository } from ".";
import { Product } from "../../entities";

export interface IProductsRepository extends ICrudRepository<Product> {}
