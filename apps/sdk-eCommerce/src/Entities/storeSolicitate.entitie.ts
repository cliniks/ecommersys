import { storeInfo } from "./store.entitie";

export type StoreSolicitate = {
  _id?: string;
  name: string;
  storeInfo: storeInfo;
  owner: string;
  register: Date;
};
