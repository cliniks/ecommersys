import { Model } from "mongoose";
import { Store } from "../../entities";
import { getAllProps, getOneProps, ISellersRepository } from "../Interfaces";
declare class SellersImplementation implements ISellersRepository {
    private model;
    private crud;
    constructor(model: Model<Store>);
    getOne: ({ key, value }: getOneProps) => Promise<Store>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Store>>;
    getMany: (ids: string[], fields?: string) => Promise<Store[]>;
    addOne: (data: Store) => Promise<Store>;
    update: (id: string, data: any) => Promise<Store>;
    delete: (id: string) => Promise<any>;
}
export default SellersImplementation;
