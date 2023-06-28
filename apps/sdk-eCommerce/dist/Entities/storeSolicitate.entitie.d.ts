import { storeInfo } from "./store.entitie";
import { User } from "./user.entitie";
export declare type StoreSolicitate = {
  _id?: string;
  name: string;
  storeInfo: storeInfo;
  isActive: boolean;
  owner?: User;
  createdAt?: Date;
  updatedAt?: Date;
};
