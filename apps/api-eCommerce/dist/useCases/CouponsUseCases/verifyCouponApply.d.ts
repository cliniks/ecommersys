import { Coupon, Product, Store } from "../../entities";
export declare const applyCouponDiscount: (coupon: Coupon, store: Store, product: Partial<Product>, amount: number) => assignedReturn;
export declare const verifyIncludesSlash: (str: string, item: number) => string;
export declare const applyDiscount: (discountType: Coupon["type"], productValue: string, discountValue: string) => {
    discountApplied: number;
    discount: number;
};
export declare const prepareResponse: (discountType: Coupon["type"], product: Partial<Product>, coupon: Coupon, amount: number) => {
    totalValue: number;
    couponApplied: string;
    discountApplied: number;
    discount: number;
};
export declare const filterBestCoupon: (ApplyCoupon: assignedReturn[]) => discountApplied;
export declare const verifyCouponApply: (coupons: Coupon[], store: Store, product: Partial<Product>, amount: number) => discountApplied;
export declare type assignedReturn = {
    categories: discountApplied | null;
    products: discountApplied | null;
    stores: discountApplied | null;
};
declare type discountApplied = {
    totalValue: number;
    couponApplied: string;
    discountApplied: number;
    discount: number;
};
export {};
