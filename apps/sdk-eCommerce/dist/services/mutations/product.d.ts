import { Product } from "../../Entities";
import { Either } from "../../Errors/Either";
import { getAllProps } from "../../interfaces";
export declare const productMutations: {
    getProductSingle: ({ key, value, }: {
        key: string;
        value: string;
    }) => Promise<Either<productErrors, Product>>;
    getProducts: (props: getAllProps) => Promise<Either<productErrors, Product>>;
    add: (formData: FormData) => Promise<Either<productErrors, Product>>;
    update: ({ productId, data, }: {
        productId: string;
        data: Partial<Product>;
    }) => Promise<Either<productErrors, Product>>;
    favoriteProduct: (productId: string) => Promise<Either<productErrors, Product>>;
    likeProduct: (productId: string) => Promise<Either<productErrors, Product>>;
};
export declare type productErrors = "Não foi possível localizar produto" | "Não foi possível autenticar" | "Não foi possível adicionar o produto";
