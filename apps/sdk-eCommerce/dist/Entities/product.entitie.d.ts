export declare type Product = {
    _id?: string;
    name: string;
    description: string;
    price: string;
    imgs: string[];
    partners: string[];
    virtualProduct: boolean;
    isActive?: boolean;
    shippingInfo: {
        height: String;
        width: String;
        weight: String;
    };
    owner: string;
    discount: discountType[];
    status: boolean;
    categories: [];
    statistics: {
        likes: number;
        likers: string[];
        views: number;
        favorite: number;
        favorites: string[];
        buys: number;
    };
    stockInfo: {
        qnt: number;
        sku: string;
        SoldIndividually: boolean;
    };
    tags: string[];
    hangTags: string[];
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type discountType = {
    key: string[];
    type: string;
    active: boolean;
    percentage: number;
};
