import { Product } from "../../../Entities";
import { Response } from "../../../Errors";
import { IGlobalProducts, getAllProps, getAllReturn } from "../../../interfaces";
import { productErrors } from "../../../services";
export declare class GlobalProducts implements IGlobalProducts {
    getSingle(props: {
        key: string;
        value: string;
    }): Promise<Response<productErrors, Product>>;
    getAll(props: getAllProps): Promise<Response<productErrors, getAllReturn<Product>>>;
}
