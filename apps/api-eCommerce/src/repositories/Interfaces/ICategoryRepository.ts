import { ICrudRepository } from ".";
import { Category } from "../../entities";

export interface ICategoryRepository extends ICrudRepository<Category> {}
