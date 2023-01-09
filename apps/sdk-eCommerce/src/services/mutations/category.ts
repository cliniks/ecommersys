import { Category, Checkout } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { getAllProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the checkout can do. */
export const categoryMutation = {
  getSingle: async (
    key: string,
    value: string
  ): Promise<Either<categoryErrors, Checkout>> => {
    const response = await apiEcommerce.get(`/categories/`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o category");

    return throwSuccess(response.data);
  },

  getMyCategories: async (
    props: getAllProps
  ): Promise<Either<categoryErrors, Checkout>> => {
    const response = await apiEcommerce.get(`/sellers/getMyCategories`, {
      params: props,
    });

    if (!response.data) return throwError("Não foi possível achar o category");

    return throwSuccess(response.data);
  },

  create: async (data: Category): Promise<Either<categoryErrors, Category>> => {
    const response = await apiEcommerce.post(`/categories/}`, data);

    if (!response.data) return throwError("Não foi possível criar category");

    return throwSuccess(response.data);
  },

  update: async (
    categoryId: string,
    data: Partial<Category>
  ): Promise<Either<categoryErrors, Category>> => {
    const response = await apiEcommerce.patch(
      `/categories/${categoryId}`,
      data
    );

    if (!response.data)
      return throwError("Não foi possível atualizar category");

    return throwSuccess(response.data);
  },

  cancel: async (
    categoryId: String
  ): Promise<Either<categoryErrors, Category>> => {
    const response = await apiEcommerce.patch(
      `/categories/cancel/${categoryId}`
    );

    if (!response.data) return throwError("Não foi possível cancelar category");

    return throwSuccess(response.data);
  },
};

export type categoryErrors =
  | "Não foi possível achar o category"
  | "Não foi possível gerar um novo category"
  | "Não foi possível criar category"
  | "Não foi possível atualizar category"
  | "Não foi possível utilizar category"
  | "Não foi possível cancelar category";
