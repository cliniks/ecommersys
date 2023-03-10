import { Model } from "mongoose";
import { GlobalCommissionType, categoryCommissionType, productCommissionType, storeCommissionType } from "../../entities";
import { ICategoryCommission, IGlobalCommission, IProductCommission, IStoreCommission, getAllProps, getOneProps } from "../Interfaces";
export declare class GlobalCommissionImplementation implements IGlobalCommission {
    private model;
    private crud;
    constructor(model: Model<GlobalCommissionType>);
    getOne: ({ key, value }: getOneProps) => Promise<GlobalCommissionType>;
    getMany: (ids: string[], fields?: string) => Promise<GlobalCommissionType[]>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<GlobalCommissionType>>;
    addOne: (data: GlobalCommissionType) => Promise<GlobalCommissionType>;
    update: (id: string, data: any) => Promise<GlobalCommissionType>;
    delete: (id: string) => Promise<any>;
}
export declare class StoreCommissionImplementation implements IStoreCommission {
    private model;
    private crud;
    constructor(model: Model<storeCommissionType>);
    getOne: ({ key, value }: getOneProps) => Promise<storeCommissionType>;
    getMany: (ids: string[], fields?: string) => Promise<storeCommissionType[]>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<storeCommissionType>>;
    addOne: (data: storeCommissionType) => Promise<storeCommissionType>;
    update: (id: string, data: any) => Promise<storeCommissionType>;
    delete: (id: string) => Promise<any>;
}
export declare class CategoryCommissionImplementation implements ICategoryCommission {
    private model;
    private crud;
    constructor(model: Model<categoryCommissionType>);
    getOne: ({ key, value }: getOneProps) => Promise<categoryCommissionType>;
    getMany: (ids: string[], fields?: string) => Promise<categoryCommissionType[]>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<categoryCommissionType>>;
    addOne: (data: categoryCommissionType) => Promise<categoryCommissionType>;
    update: (id: string, data: any) => Promise<categoryCommissionType>;
    delete: (id: string) => Promise<any>;
}
export declare class ProductCommissionImplementation implements IProductCommission {
    private model;
    private crud;
    constructor(model: Model<productCommissionType>);
    getOne: ({ key, value }: getOneProps) => Promise<productCommissionType>;
    getMany: (ids: string[], fields?: string) => Promise<productCommissionType[]>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<productCommissionType>>;
    addOne: (data: productCommissionType) => Promise<productCommissionType>;
    update: (id: string, data: any) => Promise<productCommissionType>;
    delete: (id: string) => Promise<any>;
}
