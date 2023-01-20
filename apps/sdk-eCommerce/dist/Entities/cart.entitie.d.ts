export declare type Cart = {
    _id?: string;
    buyer: string;
    isActive?: boolean;
    productsInfo: ProductInfo[];
    createdAt?: Date;
    uodatedAt?: Date;
};
export declare type ProductInfo = {
    productId: string;
    amount: number;
    size: string;
};
