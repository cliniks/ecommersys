import { Product } from "../../Entities";
import { Response } from "../../Errors";
import { IUserProduct } from "../../interfaces";
import { productErrors, productMutations, userMutations } from "../../services";

import { Try } from "../../utils";

export class userProduct implements IUserProduct {
  async seeProduct({
    productId,
  }: {
    productId: string;
  }): Promise<Response<productErrors, Product>> {
    return await Try(userMutations.seeProduct, productId);
  }

  async likeProduct(
    productId: string
  ): Promise<Response<productErrors, Product>> {
    return await Try(productMutations.likeProduct, productId);
  }
  async favoriteProduct(
    productId: string
  ): Promise<Response<productErrors, Product>> {
    return await Try(productMutations.favoriteProduct, productId);
  }
}
