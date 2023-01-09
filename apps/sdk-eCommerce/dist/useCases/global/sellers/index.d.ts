import { Store } from "../../../Entities";
import { Response } from "../../../Errors";
import { IGlobalSellers, getAllProps, getAllReturn } from "../../../interfaces";
import { sellerErrors } from "../../../services";
export declare class GlobalSellers implements IGlobalSellers {
    getSingle(key: string, value: string): Promise<Response<sellerErrors, Store>>;
    getAll(props: getAllProps): Promise<Response<sellerErrors, getAllReturn<Store>>>;
}
