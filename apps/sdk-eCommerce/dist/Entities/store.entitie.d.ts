export declare type Store = {
    _id?: string;
    name: string;
    wallet?: wallet;
    img?: string;
    segments?: [];
    storeInfo: storeInfo;
    melhorEnvioID?: string;
    asaasID?: string;
    asaasApiKey?: string;
    owner: string;
    products?: string[];
    productsCount?: number;
    statistics?: statistics;
    openOrders?: [];
    salesHistory?: [];
    salesToSend?: [];
    messages?: [];
    tokenStripe?: string;
    register?: Date;
};
export declare type wallet = {
    amount: number;
    history: [];
};
export declare type storeInfo = {
    cnpj: string;
    address: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    cep: string;
    email: string;
};
export declare type statistics = {
    views: number;
    clients: string[];
};
