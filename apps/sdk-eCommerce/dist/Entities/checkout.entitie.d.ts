export declare type Checkout = {
    _id?: string;
    owner: String;
    products: Products[];
    isActive?: boolean;
    meId: String;
    asaasId: String;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type Products = {
    storeId: String;
    store: {};
    items: [];
    meValuePreview: String;
};
