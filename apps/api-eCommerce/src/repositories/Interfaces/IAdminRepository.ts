import { ICrudRepository } from ".";
import {
  GlobalCommissionType,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
} from "../../entities";

export interface IAdminConfigs {}

export interface IGlobalCommission
  extends ICrudRepository<GlobalCommissionType> {}

export interface IStoreCommission
  extends ICrudRepository<storeCommissionType> {}

export interface ICategoryCommission
  extends ICrudRepository<categoryCommissionType> {}

export interface IProductCommission
  extends ICrudRepository<productCommissionType> {}
