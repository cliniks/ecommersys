import { Product } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardProduct, getAllProps, getAllReturn } from "../../interfaces";
import { sellerErrors } from "../../services";
export declare class sellerProduct implements ISellerDashboardProduct {
    getMyProducts(props: getAllProps): Promise<Response<sellerErrors, getAllReturn<Product>>>;
    create(formData: FormData): Promise<Response<sellerErrors, Product>>;
    update(data: Partial<Product>): Promise<Response<sellerErrors, Product>>;
}
