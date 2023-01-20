import { Product } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { getAllProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

export const productMutations = {
  getProductSingle: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<productErrors, Product>> => {
    const product = await apiEcommerce.get(`/products`, {
      params: { key, value },
    });

    if (!product) return throwError("Não foi possível localizar produto");

    return throwSuccess(product.data);
  },
  getProducts: async (
    props: getAllProps
  ): Promise<Either<productErrors, Product>> => {
    const products = await apiEcommerce.get(`/products/all`, { params: props });

    if (!products) return throwError("Não foi possível localizar produto");

    return throwSuccess(products.data);
  },
  add: async (formData: FormData): Promise<Either<productErrors, Product>> => {
    const products = await apiEcommerce.post(`/products`, formData);

    if (!products) return throwError("Não foi possível adicionar o produto");

    return throwSuccess(products.data);
  },
  update: async ({
    productId,
    data,
  }: {
    productId: string;
    data: Partial<Product>;
  }): Promise<Either<productErrors, Product>> => {
    const products = await apiEcommerce.patch(`/products/${productId}`, data);

    if (!products) return throwError("Não foi possível adicionar o produto");

    return throwSuccess(products.data);
  },
  // addProductImg: async (
  //   img: Partial<Product>
  // ): Promise<Either<productErrors, Product>> => {
  //   const products = await apiEcommerce.patch(`/products`, img);

  //   if (!products) return throwError("Não foi possível adicionar o produto");

  //   return throwSuccess(products.data);
  // },
};

export type productErrors =
  | "Não foi possível localizar produto"
  | "Não foi possível autenticar"
  | "Não foi possível adicionar o produto";
