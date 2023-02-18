import { storeInfo } from "./store.entitie";
import { User } from "./user.entitie";

export type StoreSolicitate = {
  _id?: string;
  name: string;
  storeInfo: storeInfo;
  isActive: boolean;
  owner?: User;
  createdAt?: Date;
  updatedAt?: Date;
};
