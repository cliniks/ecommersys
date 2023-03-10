import {
  GlobalCommissionType,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
} from "../../Entities";
import {
  ICategoryCommission,
  ICommission,
  IGlobalCommission,
  IProductCommission,
  IStoreCommission,
  getAllProps,
  getSingleProps,
} from "../../interfaces";
import { commissions } from "../../services/mutations/commission";
import { Try } from "../../utils";

export class commission implements ICommission {
  Global = new GlobalCommission();
  Product = new ProductCommission();
  Category = new CategoryCommission();
  Store = new StoreCommission();
}

export class GlobalCommission
  implements IGlobalCommission<GlobalCommissionType>
{
  getSingle = async (props: getSingleProps) =>
    Try(commissions.GlobalCommission.getSingle, props);
  getAll = async (props: getAllProps) =>
    Try(commissions.GlobalCommission.getAll, props);
  updateOne = (props: {
    commissionId: string;
    data: Partial<GlobalCommissionType>;
  }) => Try(commissions.GlobalCommission.update, props);
}

export class ProductCommission
  implements IProductCommission<productCommissionType>
{
  getSingle = async (props: getSingleProps) =>
    Try(commissions.ProductCommission.getSingle, props);
  getByStore = async (storeId: string) =>
    Try(commissions.ProductCommission.getByStore, storeId);
  add = async (data: Partial<productCommissionType>) =>
    Try(commissions.ProductCommission.add, data);
  getAll = async (props: getAllProps) =>
    Try(commissions.ProductCommission.getAll, props);
  updateOne = (props: {
    commissionId: string;
    data: Partial<productCommissionType>;
  }) => Try(commissions.ProductCommission.update, props);
}

export class CategoryCommission
  implements ICategoryCommission<categoryCommissionType>
{
  getSingle = async (props: getSingleProps) =>
    Try(commissions.CategoryCommission.getSingle, props);
  getByStore = async (storeId: string) =>
    Try(commissions.CategoryCommission.getByStore, storeId);
  add = async (data: Partial<categoryCommissionType>) =>
    Try(commissions.CategoryCommission.add, data);
  getAll = async (props: getAllProps) =>
    Try(commissions.CategoryCommission.getAll, props);
  updateOne = (props: {
    commissionId: string;
    data: Partial<categoryCommissionType>;
  }) => Try(commissions.CategoryCommission.update, props);
}

export class StoreCommission implements IStoreCommission<storeCommissionType> {
  getSingle = async (props: getSingleProps) =>
    Try(commissions.StoreCommission.getSingle, props);
  add = async (data: Partial<storeCommissionType>) =>
    Try(commissions.StoreCommission.add, data);
  getAll = async (props: getAllProps) =>
    Try(commissions.StoreCommission.getAll, props);
  updateOne = (props: {
    commissionId: string;
    data: Partial<storeCommissionType>;
  }) => Try(commissions.StoreCommission.update, props);
}
