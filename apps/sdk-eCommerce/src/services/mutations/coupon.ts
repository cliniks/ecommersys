import { Coupon } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { getAllProps, getAllReturn } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the checkout can do. */
export const couponMutation = {
  getSingle: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<couponErrors, Coupon>> => {
    const response = await apiEcommerce.get(`/coupons/`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o cupom");

    return throwSuccess(response.data);
  },

  getMyCoupons: async (
    props: getAllProps
  ): Promise<Either<couponErrors, getAllReturn<Coupon>>> => {
    const response = await apiEcommerce.get(`/sellers/getMyCoupons`, {
      params: props,
    });

    if (!response.data) return throwError("Não foi possível achar os cupons");

    return throwSuccess(response.data);
  },

  createCoupon: async (data: Coupon): Promise<Either<couponErrors, Coupon>> => {
    const response = await apiEcommerce.post(`/coupons`, data);

    if (!response.data) return throwError("Não foi possível criar cupom");

    return throwSuccess(response.data);
  },

  updateCoupon: async ({
    couponId,
    data,
  }: {
    couponId: string;
    data: Partial<Coupon>;
  }): Promise<Either<couponErrors, Coupon>> => {
    const response = await apiEcommerce.patch(`/coupons/${couponId}`, data);

    if (!response.data) return throwError("Não foi possível atualizar cupom");

    return throwSuccess(response.data);
  },

  utilizeCoupon: async ({
    couponId,
  }: {
    couponId: String;
  }): Promise<Either<couponErrors, Coupon>> => {
    const request = await apiEcommerce.patch(`/coupons/utilize/${couponId}`);

    if (!request.data) return throwError("Não foi possível utilizar cupom");

    return throwSuccess(request.data);
  },

  cancelCoupon: async (
    couponId: String
  ): Promise<Either<couponErrors, Coupon>> => {
    const response = await apiEcommerce.patch(`/coupons/${couponId}`, {
      isActive: false,
    });

    if (!response.data) return throwError("Não foi possível cancelar cupom");

    return throwSuccess(response.data);
  },
};

export type couponErrors =
  | "Não foi possível achar o cupom"
  | "Não foi possível gerar um novo cupom"
  | "Não foi possível criar cupom"
  | "Não foi possível atualizar cupom"
  | "Não foi possível utilizar cupom"
  | "Não foi possível achar os cupons"
  | "Não foi possível cancelar cupom";
