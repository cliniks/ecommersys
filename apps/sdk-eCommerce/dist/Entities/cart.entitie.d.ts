export declare type Cart = {
    _id?: string;
    buyer: string;
    productsInfo: ProductInfo[];
    register?: Date;
};
export declare type ProductInfo = {
    productId: string;
    amount: number;
    size: string;
};
