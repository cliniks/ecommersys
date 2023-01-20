import { Product } from "../../Entities";
import { Response } from "../../Errors";
import {
  ISellerDashboardProduct,
  getAllProps,
  getAllReturn,
} from "../../interfaces";
import {
  productMutations,
  sellerErrors,
  sellerMutations,
} from "../../services";

import { Try } from "../../utils";

export class sellerProduct implements ISellerDashboardProduct {
  async getMyProducts(
    props: getAllProps
  ): Promise<Response<sellerErrors, getAllReturn<Product>>> {
    return await Try(sellerMutations.getMyProducts, props);
  }
  async create(formData: FormData): Promise<Response<sellerErrors, Product>> {
    return await Try(productMutations.add, formData);
  }
  async update(data: {
    productId: string;
    data: Partial<Product>;
  }): Promise<Response<sellerErrors, Product>> {
    return await Try(productMutations.update, data);
  }
}
