import { ProductInfo } from "./cart.entitie";
export declare type Sales = {
    _id?: string;
    seller: string;
    buyer: string;
    isActive?: boolean;
    productsInfo: ProductInfo[];
    createdAt?: Date;
    updatedAt?: Date;
};
