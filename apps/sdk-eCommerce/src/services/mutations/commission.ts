import {
  GlobalCommissionType,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
} from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

const GlobalCommission = {
  getSingle: async ({
    key,
    value,
  }: getSingleProps): Promise<
    Either<commissionErrors, GlobalCommissionType>
  > => {
    const response = await apiEcommerce.get(`/admin/commission`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o commissão");

    return throwSuccess(response.data);
  },
  getAll: async (
    props: getAllProps
  ): Promise<Either<commissionErrors, getAllReturn<GlobalCommissionType>>> => {
    const response = await apiEcommerce.get(`/admin/commission/all`, {
      params: props,
    });

    if (!response) return throwError("Não foi possível encontrar comissões");

    return throwSuccess(response.data);
  },
  update: async ({
    commissionId,
    data,
  }: {
    commissionId: string;
    data: Partial<GlobalCommissionType>;
  }): Promise<Either<commissionErrors, GlobalCommissionType>> => {
    const response = await apiEcommerce.patch(
      `/admin/commission/${commissionId}`,
      data
    );

    if (!response.data)
      return throwError("Não foi possível atualizar comissão");

    return throwSuccess(response.data);
  },
};
const StoreCommission = {
  getSingle: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<commissionErrors, storeCommissionType>> => {
    const response = await apiEcommerce.get(`/admin/commission/store`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o commissão");

    return throwSuccess(response.data);
  },
  getAll: async (
    props: getAllProps
  ): Promise<Either<commissionErrors, getAllReturn<storeCommissionType>>> => {
    const response = await apiEcommerce.get(`/admin/commission/store/all`, {
      params: props,
    });

    if (!response) return throwError("Não foi possível encontrar comissões");

    return throwSuccess(response.data);
  },
  add: async (
    data: Partial<storeCommissionType>
  ): Promise<Either<commissionErrors, storeCommissionType>> => {
    const response = await apiEcommerce.post(`/admin/commission/store`, data);

    if (!response.data) return throwError("Não foi possível criar a commissão");

    return throwSuccess(response.data);
  },
  update: async ({
    commissionId,
    data,
  }: {
    commissionId: string;
    data: Partial<storeCommissionType>;
  }): Promise<Either<commissionErrors, storeCommissionType>> => {
    const response = await apiEcommerce.patch(
      `/admin/commission/store/${commissionId}`,
      data
    );

    if (!response.data)
      return throwError("Não foi possível atualizar comissão");

    return throwSuccess(response.data);
  },
};
const CategoryCommission = {
  getSingle: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<commissionErrors, categoryCommissionType>> => {
    const response = await apiEcommerce.get(`/admin/commission/category`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o commissão");

    return throwSuccess(response.data);
  },
  add: async (
    data: Partial<categoryCommissionType>
  ): Promise<Either<commissionErrors, categoryCommissionType>> => {
    const response = await apiEcommerce.post(
      `/admin/commission/category`,
      data
    );

    if (!response.data) return throwError("Não foi possível criar a commissão");

    return throwSuccess(response.data);
  },
  getAll: async (
    props: getAllProps
  ): Promise<
    Either<commissionErrors, getAllReturn<categoryCommissionType>>
  > => {
    const response = await apiEcommerce.get(`/admin/commission/category/all`, {
      params: props,
    });

    if (!response) return throwError("Não foi possível encontrar comissões");

    return throwSuccess(response.data);
  },
  update: async ({
    commissionId,
    data,
  }: {
    commissionId: string;
    data: Partial<categoryCommissionType>;
  }): Promise<Either<commissionErrors, categoryCommissionType>> => {
    const response = await apiEcommerce.patch(
      `/admin/commission/category/${commissionId}`,
      data
    );

    if (!response.data)
      return throwError("Não foi possível atualizar comissão");

    return throwSuccess(response.data);
  },
};
const ProductCommission = {
  getSingle: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<commissionErrors, productCommissionType>> => {
    const response = await apiEcommerce.get(`/admin/commission/product`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o commissão");

    return throwSuccess(response.data);
  },
  add: async (
    data: Partial<productCommissionType>
  ): Promise<Either<commissionErrors, productCommissionType>> => {
    const response = await apiEcommerce.post(`/admin/commission/product`, data);

    if (!response.data) return throwError("Não foi possível criar a commissão");

    return throwSuccess(response.data);
  },
  getAll: async (
    props: getAllProps
  ): Promise<Either<commissionErrors, getAllReturn<productCommissionType>>> => {
    const response = await apiEcommerce.get(`/admin/commission/product/all`, {
      params: props,
    });

    if (!response) return throwError("Não foi possível encontrar comissões");

    return throwSuccess(response.data);
  },
  update: async ({
    commissionId,
    data,
  }: {
    commissionId: string;
    data: Partial<productCommissionType>;
  }): Promise<Either<commissionErrors, productCommissionType>> => {
    const response = await apiEcommerce.patch(
      `/admin/commission/product/${commissionId}`,
      data
    );

    if (!response.data)
      return throwError("Não foi possível atualizar comissão");

    return throwSuccess(response.data);
  },
};

export type commissionErrors =
  | "Não foi possível achar o commissão"
  | "Não foi possível atualizar comissão"
  | "Não foi possível encontrar comissões"
  | "Não foi possível criar a commissão";

export const commissions = {
  GlobalCommission,
  StoreCommission,
  CategoryCommission,
  ProductCommission,
};
