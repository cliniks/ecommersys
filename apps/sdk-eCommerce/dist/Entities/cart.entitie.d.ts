import { Product } from "./product.entitie";
export declare type Cart = {
    _id?: string;
    owner: string;
    isActive: boolean;
    products: ProductInfo[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type ProductInfo = {
    productId: string;
    amount: number;
};
export declare type CartResponse = {
    _id?: string;
    owner: string;
    isActive: boolean;
    products: ProductsReturn[];
    totalPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type ProductsReturn = ProductInfo & Product;
