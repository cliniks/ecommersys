import { CommissionType } from "../../entities";
export declare const verifyProductCommission: () => void;
export declare const verifyCategoryCommission: () => void;
export declare const verifyStoreCommission: () => void;
export declare const verifyGlobalCommission: () => Promise<CommissionType>;
export declare const applyCommission: (price: number) => Promise<number>;
