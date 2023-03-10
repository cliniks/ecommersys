import { Cart, Coupon, ProductsReturn } from "../../entities";
import { IProductsRepository } from "../../repositories/Interfaces";
export declare const verifyIfCanBeAplied: (cart: Cart, coupon: Coupon, productRepo: IProductsRepository) => Promise<{
    cartStatistics: cartStatistics;
    productItems: ProductsReturn[];
    isPossible: boolean;
}>;
export declare type cartStatistics = {
    productIds: string[];
    categoryIds: string[];
    storeIds: string[];
};
