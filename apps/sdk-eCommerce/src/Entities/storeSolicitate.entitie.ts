import { storeInfo } from "./store.entitie";

export type StoreSolicitate = {
  _id?: string;
  name: string;
  storeInfo: storeInfo;
  isActive?: boolean;
  owner?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
