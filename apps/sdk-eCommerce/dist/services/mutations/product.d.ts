import { Product } from "../../Entities";
import { Either } from "../../Errors/Either";
import { getAllProps } from "../../interfaces";
export declare const productMutations: {
    getProductSingle: (key: string, value: string) => Promise<Either<productErrors, Product>>;
    getProducts: (props: getAllProps) => Promise<Either<productErrors, Product>>;
    add: (formData: FormData) => Promise<Either<productErrors, Product>>;
    update: (data: Partial<Product>) => Promise<Either<productErrors, Product>>;
};
export declare type productErrors = "Não foi possível localizar produto" | "Não foi possível autenticar" | "Não foi possível adicionar o produto";
