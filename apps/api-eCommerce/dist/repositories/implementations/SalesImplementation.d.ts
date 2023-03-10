import { Model } from "mongoose";
import { Sales } from "../../entities";
import { getAllProps, getOneProps, ISalesRepository } from "../Interfaces";
declare class SalesImplementation implements ISalesRepository {
    private model;
    private crud;
    constructor(model: Model<Sales>);
    getOne: ({ key, value }: getOneProps) => Promise<Sales>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Sales>>;
    getMany: (ids: string[], fields?: string) => Promise<Sales[]>;
    addOne: (data: Sales) => Promise<Sales>;
    update: (id: string, data: any) => Promise<Sales>;
    delete: (id: string) => Promise<any>;
}
export default SalesImplementation;
