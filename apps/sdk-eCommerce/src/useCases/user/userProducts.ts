import { Product } from "../../Entities";
import { Response } from "../../Errors";
import { IUserProduct } from "../../interfaces";
import { productErrors, userMutations } from "../../services";

import { Try } from "../../utils";

export class userProduct implements IUserProduct {
  async seeProduct(
    productId: string
  ): Promise<Response<productErrors, Product>> {
    return await Try(userMutations.seeProduct, productId);
  }
}
