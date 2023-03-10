import { ProductsReturn } from "../../entities";
export declare const getCartProducts: (cartProductArray: {
    productId: string;
    amount: number;
}[], couponArray: string[]) => Promise<ProductsReturn[]>;
