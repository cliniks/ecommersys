import { notificationTypes } from "../../Entities/notification.entitie";
import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { getAllProps, getAllReturn } from "../../interfaces";
import { apiEcommerce } from "../axiosInstances";

export const notifyMutations = {
  getOneNotify: async ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }): Promise<Either<notifyErrors, notificationTypes>> => {
    const notificationTypes = await apiEcommerce.get(`/notify`, {
      params: { key, value },
    });

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  getAllNotify: async (
    props: getAllProps
  ): Promise<Either<notifyErrors, getAllReturn<notificationTypes>>> => {
    const notificationTypes = await apiEcommerce.get(`/notify/all`, {
      params: props,
    });

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  readNotification: async (
    id: string
  ): Promise<Either<notifyErrors, notificationTypes>> => {
    const notificationTypes = await apiEcommerce.get(
      `/notify/readNotification/${id}`
    );

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  getAllUserNotify: async (
    props: getAllProps
  ): Promise<Either<notifyErrors, notificationTypes[]>> => {
    const notificationTypes = await apiEcommerce.get(`/notify/myUserNotifies`, {
      params: props,
    });

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  getAllSellerNotify: async (
    props: getAllProps
  ): Promise<Either<notifyErrors, notificationTypes[]>> => {
    const notificationTypes = await apiEcommerce.get(
      `/notify/mySellerNotifies`,
      {
        params: props,
      }
    );

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  getAllGlobalNotify: async (
    props: getAllProps
  ): Promise<Either<notifyErrors, getAllReturn<notificationTypes>>> => {
    const notificationTypes = await apiEcommerce.get(`/notify/globalNotifies`, {
      params: props,
    });

    if (!notificationTypes)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypes.data);
  },

  add: async (
    data: Partial<notificationTypes>
  ): Promise<Either<notifyErrors, notificationTypes>> => {
    const notificationTypess = await apiEcommerce.post(`/notify`, data);

    if (!notificationTypess)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypess.data);
  },
  update: async ({
    notifyId,
    data,
  }: {
    notifyId: string;
    data: Partial<notificationTypes>;
  }): Promise<Either<notifyErrors, notificationTypes>> => {
    const notificationTypess = await apiEcommerce.patch(
      `/notify/${notifyId}`,
      data
    );

    if (!notificationTypess)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypess.data);
  },
  delete: async ({
    notifyId,
  }: {
    notifyId: string;
  }): Promise<Either<notifyErrors, string>> => {
    const notificationTypess = await apiEcommerce.delete(`/notify/${notifyId}`);

    if (!notificationTypess)
      return throwError("Não foi possível localizar a notificação");

    return throwSuccess(notificationTypess.data);
  },
};

export type notifyErrors = "Não foi possível localizar a notificação";
