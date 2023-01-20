import { Category } from "../../../Entities";
import { Response } from "../../../Errors";
import { IGlobalCategories, getAllProps, getAllReturn } from "../../../interfaces";
import { categoryErrors } from "../../../services/mutations/category";
export declare class GlobalCategories implements IGlobalCategories {
    getSingle(props: {
        key: string;
        value: string;
    }): Promise<Response<categoryErrors, Category>>;
    getAll(props: getAllProps): Promise<Response<categoryErrors, getAllReturn<Category>>>;
}
