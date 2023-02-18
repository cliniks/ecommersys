import { CommissionType } from "./admin.entitie";

export type storeCommissionType = CommissionType & { storeId: string };

export type productCommissionType = CommissionType & { productId: string };

export type categoryCommissionType = CommissionType & { categoryId: string };
