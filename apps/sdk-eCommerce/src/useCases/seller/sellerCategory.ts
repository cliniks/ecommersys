import { Category } from "../../Entities";
import { Response } from "../../Errors";
import {
  ISellerDashboardCategory,
  getAllProps,
  getAllReturn,
  getSingleProps,
} from "../../interfaces";
import { sellerMutations } from "../../services";
import {
  categoryErrors,
  categoryMutation,
} from "../../services/mutations/category";
import { Try } from "../../utils";

export class sellerCategory implements ISellerDashboardCategory {
  async getSingle(
    props: getSingleProps
  ): Promise<Response<categoryErrors, Category>> {
    return await Try(categoryMutation.getSingle, props);
  }
  async getMyCategories(
    props: getAllProps
  ): Promise<Response<categoryErrors, getAllReturn<Category>>> {
    return await Try(sellerMutations.getMyCategories, props);
  }
  async create(data: Category): Promise<Response<categoryErrors, Category>> {
    return await Try(categoryMutation.create, data);
  }
  async update(props: {
    categoryId: string;
    data: Partial<Category>;
  }): Promise<Response<categoryErrors, Category>> {
    return await Try(categoryMutation.update, props);
  }
  async cancel({
    categoryId,
  }: {
    categoryId: string;
  }): Promise<Response<categoryErrors, Category>> {
    return await Try(categoryMutation.cancel, categoryId);
  }
}
