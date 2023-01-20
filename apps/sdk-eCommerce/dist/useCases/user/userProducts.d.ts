import { Product } from "../../Entities";
import { Response } from "../../Errors";
import { IUserProduct } from "../../interfaces";
import { productErrors } from "../../services";
export declare class userProduct implements IUserProduct {
    seeProduct({ productId, }: {
        productId: string;
    }): Promise<Response<productErrors, Product>>;
    likeProduct({ productId, }: {
        productId: string;
    }): Promise<Response<productErrors, Product>>;
}
