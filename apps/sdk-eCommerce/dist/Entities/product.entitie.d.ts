export declare type Product = {
    _id?: string;
    name: string;
    description: string;
    value: string;
    img: [];
    partners: string[];
    qnt: number;
    sizes: sizesType[];
    height: string;
    width: string;
    weight: string;
    owner: string;
    ownerData: {};
    likes: number;
    likers: string[];
    favorites: string[];
    discount: discountType[];
    status: boolean;
    group: [];
    subgroup: [];
    statistics: {
        views: number;
        buyeds: number;
    };
    register?: Date;
};
export declare type sizesType = {
    qnt: number;
    sizeType: string;
};
export declare type discountType = {
    key: string[];
    type: string;
    active: boolean;
    percentage: number;
};
