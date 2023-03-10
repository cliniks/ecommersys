import { CommissionType } from "./admin.entitie";

export type storeCommissionType = CommissionType & { storeId: string };

export type productCommissionType = storeCommissionType & {
  name: string;
  productId: string;
};

export type categoryCommissionType = storeCommissionType & {
  name: string;
  categoryId: string;
};
