import { Cart, Checkout, Coupon } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors";
import { getAllProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

/* A object with all the mutations that the checkout can do. */
export const couponMutation = {
  getSingle: async (
    key: string,
    value: string
  ): Promise<Either<couponErrors, Checkout>> => {
    const response = await apiEcommerce.get(`/coupons/`, {
      params: { key, value },
    });

    if (!response.data) return throwError("Não foi possível achar o cupom");

    return throwSuccess(response.data);
  },

  getMyCoupons: async (
    props: getAllProps
  ): Promise<Either<couponErrors, Coupon[]>> => {
    const response = await apiEcommerce.get(`/sellers/getMyCoupons`, {
      params: props,
    });

    if (!response.data)
      return throwError("Não foi possível achar as categorias");

    return throwSuccess(response.data);
  },

  createCoupon: async (data: Coupon): Promise<Either<couponErrors, Cart>> => {
    const response = await apiEcommerce.post(`/coupons/}`, data);

    if (!response.data) return throwError("Não foi possível criar cupom");

    return throwSuccess(response.data);
  },

  updateCoupon: async (
    couponId: string,
    data: Partial<Coupon>
  ): Promise<Either<couponErrors, Cart>> => {
    const response = await apiEcommerce.patch(`/coupons/${couponId}`, data);

    if (!response.data) return throwError("Não foi possível atualizar cupom");

    return throwSuccess(response.data);
  },

  utilizeCoupon: async (
    couponId: String
  ): Promise<Either<couponErrors, Cart>> => {
    const request = await apiEcommerce.patch(`/coupons/utilize/${couponId}`);

    if (!request.data) return throwError("Não foi possível utilizar cupom");

    return throwSuccess(request.data);
  },

  cancelCoupon: async (
    couponId: String
  ): Promise<Either<couponErrors, Cart>> => {
    const response = await apiEcommerce.patch(`/coupons/cancel/${couponId}`);

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
  | "Não foi possível achar as categorias"
  | "Não foi possível cancelar cupom";
