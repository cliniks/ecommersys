import { Category } from "../../../Entities";
import { Response } from "../../../Errors";
import {
  IGlobalCategories,
  getAllProps,
  getAllReturn,
} from "../../../interfaces";
import {
  categoryErrors,
  categoryMutation,
} from "../../../services/mutations/category";
import { Try } from "../../../utils";

export class GlobalCategories implements IGlobalCategories {
  async getSingle(props: {
    key: string;
    value: string;
  }): Promise<Response<categoryErrors, Category>> {
    return await Try(categoryMutation.getSingle, props);
  }
  async getAll(
    props: getAllProps
  ): Promise<Response<categoryErrors, getAllReturn<Category>>> {
    return await Try(categoryMutation.getAllGlobalCategories, props);
  }
}
