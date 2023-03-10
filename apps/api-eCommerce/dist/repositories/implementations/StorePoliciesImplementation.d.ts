import { Model } from "mongoose";
import { getAllProps, getOneProps, IStorePolicyRepository } from "../Interfaces";
import { StorePolicy } from "../../entities";
declare class StorePoliciesImplementation implements IStorePolicyRepository {
    private model;
    private crud;
    constructor(model: Model<StorePolicy>);
    getOne: ({ key, value }: getOneProps) => Promise<StorePolicy>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<StorePolicy>>;
    getMany: (ids: string[], fields?: string) => Promise<StorePolicy[]>;
    addOne: (data: StorePolicy) => Promise<StorePolicy>;
    update: (id: string, data: any) => Promise<StorePolicy>;
    delete: (id: string) => Promise<any>;
}
export default StorePoliciesImplementation;
