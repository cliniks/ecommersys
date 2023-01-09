export declare type Checkout = {
    _id?: string;
    owner: String;
    products: Products[];
    meId: String;
    asaasId: String;
    register?: Date;
};
export declare type Products = {
    storeId: String;
    store: {};
    items: [];
    meValuePreview: String;
};
