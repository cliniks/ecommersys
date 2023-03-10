import { Model } from "mongoose";
import { StoreSolicitate } from "../../entities";
import { getAllProps, getOneProps, IStoreSolicitate } from "../Interfaces";
declare class StoreSolicitateImplementation implements IStoreSolicitate {
    private model;
    private crud;
    constructor(model: Model<StoreSolicitate>);
    getOne: ({ key, value }: getOneProps) => Promise<StoreSolicitate>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<StoreSolicitate>>;
    getMany: (ids: string[], fields?: string) => Promise<StoreSolicitate[]>;
    addOne: (data: StoreSolicitate) => Promise<StoreSolicitate>;
    update: (id: string, data: any) => Promise<StoreSolicitate>;
    delete: (id: string) => Promise<any>;
}
export default StoreSolicitateImplementation;
