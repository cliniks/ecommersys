import { Category, Checkout } from "../../Entities";
import { Either } from "../../Errors";
import { getAllProps } from "../../interfaces";
export declare const categoryMutation: {
    getSingle: (key: string, value: string) => Promise<Either<categoryErrors, Checkout>>;
    getMyCategories: (props: getAllProps) => Promise<Either<categoryErrors, Checkout>>;
    create: (data: Category) => Promise<Either<categoryErrors, Category>>;
    update: (categoryId: string, data: Partial<Category>) => Promise<Either<categoryErrors, Category>>;
    cancel: (categoryId: String) => Promise<Either<categoryErrors, Category>>;
};
export declare type categoryErrors = "Não foi possível achar o category" | "Não foi possível gerar um novo category" | "Não foi possível criar category" | "Não foi possível atualizar category" | "Não foi possível utilizar category" | "Não foi possível cancelar category";
