import { Product } from "../../../Entities";
import { Response } from "../../../Errors";
import {
  IGlobalProducts,
  getAllProps,
  getAllReturn,
} from "../../../interfaces";
import { productErrors, productMutations } from "../../../services";
import { Try } from "../../../utils";

export class GlobalProducts implements IGlobalProducts {
  async getSingle(props: {
    key: string;
    value: string;
  }): Promise<Response<productErrors, Product>> {
    return await Try(productMutations.getProductSingle, props);
  }
  async getAll(
    props: getAllProps
  ): Promise<Response<productErrors, getAllReturn<Product>>> {
    return await Try(productMutations.getProducts, props);
  }
}
