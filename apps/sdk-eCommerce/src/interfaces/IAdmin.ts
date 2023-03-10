import {
  GlobalCommissionType,
  Store,
  StoreSolicitate,
  categoryCommissionType,
  productCommissionType,
  storeCommissionType,
} from "../Entities";
import { notificationTypes } from "../Entities/notification.entitie";
import { Response } from "../Errors";
import { adminErrors } from "../services";
import { getAllProps, getAllReturn, getSingleProps } from "./IGlobal";

export interface IAdmin {
  getAllSellerSolicitation(
    props: getAllProps
  ): Promise<Response<adminErrors, getAllReturn<StoreSolicitate>>>;
  getSingleSellerSolicitation(
    props: getSingleProps
  ): Promise<Response<adminErrors, StoreSolicitate>>;
  confirmSellerSolicitation(props: {
    solicitationId: String;
  }): Promise<Response<adminErrors, Store>>;
  rejectSolicitation(props: {
    solicitationId: String;
  }): Promise<Response<adminErrors, Store>>;
  commission: ICommission;
  notification: IAdminNotifications<notificationTypes>;
}

export interface ICommission {
  Global: IGlobalCommission<GlobalCommissionType>;
  Product: IProductCommission<productCommissionType>;
  Category: ICategoryCommission<categoryCommissionType>;
  Store: IStoreCommission<storeCommissionType>;
}

export interface IGlobalCommission<E> extends ICrudCommissionType<E> {}
export interface IProductCommission<E> extends ICrudCommissionType<E> {
  getByStore(storeId: string): Promise<E[]>;
}
export interface ICategoryCommission<E> extends ICrudCommissionType<E> {
  getByStore(storeId: string): Promise<E[]>;
}
export interface IStoreCommission<E> extends ICrudCommissionType<E> {}

interface ICrudCommissionType<E> {
  getSingle: (props: getSingleProps) => Promise<E>;
  getAll: (props: getAllProps) => Promise<getAllReturn<E>>;
  updateOne: (props: { commissionId: string; data: Partial<E> }) => Promise<E>;
}

export interface IAdminNotifications<E> {
  add: (data: Partial<E>) => Promise<E>;
  getSingle: (props: getSingleProps) => Promise<E>;
  getAll: (props: getAllProps) => Promise<getAllReturn<E>>;
  update: (props: { notifyId: string; data: Partial<E> }) => Promise<E>;
  delete: (props: { notifyId: string }) => Promise<string>;
}
