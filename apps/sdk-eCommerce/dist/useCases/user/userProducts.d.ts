import { Product } from "../../Entities";
import { Response } from "../../Errors";
import { IUserProduct } from "../../interfaces";
import { productErrors } from "../../services";
export declare class userProduct implements IUserProduct {
    seeProduct(productId: string): Promise<Response<productErrors, Product>>;
}
