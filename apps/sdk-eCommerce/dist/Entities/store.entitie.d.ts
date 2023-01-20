export declare type Store = {
    _id?: string;
    name: string;
    wallet?: string;
    img?: string;
    banner?: string;
    segments?: [];
    storeInfo: storeInfo;
    melhorEnvioID?: string;
    asaasID?: string;
    asaasApiKey?: string;
    owner: string;
    isActive?: boolean;
    statistics?: statistics;
    createdAt?: Date;
    updatedAt?: Date;
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
