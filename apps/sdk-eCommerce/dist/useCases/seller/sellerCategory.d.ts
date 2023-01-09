import { Category } from "../../Entities";
import { Response } from "../../Errors";
import { ISellerDashboardCategory, getAllProps, getAllReturn } from "../../interfaces";
import { categoryErrors } from "../../services/mutations/category";
export declare class sellerCategory implements ISellerDashboardCategory {
    getSingle(key: string, value: string): Promise<Response<categoryErrors, Category>>;
    getMyCategories(props: getAllProps): Promise<Response<categoryErrors, getAllReturn<Category>>>;
    create(data: Category): Promise<Response<categoryErrors, Category>>;
    update(categoryId: string, data: Partial<Category>): Promise<Response<categoryErrors, Category>>;
    cancel(categoryId: string): Promise<Response<categoryErrors, Category>>;
}
