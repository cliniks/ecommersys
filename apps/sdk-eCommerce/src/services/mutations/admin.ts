import { Store, StoreSolicitate } from "../../Entities";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";
import { commissions } from "./commission";

export const adminMutations = {
  acceptSellerSolicitation: async ({
    solicitationId,
  }: {
    solicitationId: string;
  }): Promise<Either<adminErrors, Store>> => {
    const accept = await apiEcommerce.post(
      `/sellerSolicitate/confirm/${solicitationId}`
    );

    if (!accept) return throwError("Não foi possível liberar acesso");

    return throwSuccess(accept.data);
  },
  rejectSellerSolicitation: async ({
    solicitationId,
  }: {
    solicitationId: string;
  }): Promise<Either<adminErrors, Store>> => {
    const accept = await apiEcommerce.post(
      `/sellerSolicitate/reject/${solicitationId}`
    );

    if (!accept) return throwError("Não foi possível liberar acesso");

    return throwSuccess(accept.data);
  },
  getAllSellersSolicitation: async (
    props: getAllProps
  ): Promise<Either<adminErrors, getAllReturn<StoreSolicitate>>> => {
    const accept = await apiEcommerce.get(`/sellerSolicitate/all`, {
      params: props,
    });

    if (!accept) return throwError("Não foi possível encontrar");

    return throwSuccess(accept.data);
  },
  getSingleSellersSolicitation: async (
    props: getSingleProps
  ): Promise<Either<adminErrors, StoreSolicitate>> => {
    const accept = await apiEcommerce.get(`/sellerSolicitate`, {
      params: props,
    });

    if (!accept) return throwError("Não foi possível encontrar");

    return throwSuccess(accept.data);
  },
  commissions,
};

export type adminErrors =
  | "Não foi possível liberar acesso"
  | "Não foi possível encontrar";
