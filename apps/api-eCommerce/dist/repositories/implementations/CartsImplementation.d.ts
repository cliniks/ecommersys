import { Model } from "mongoose";
import { Cart } from "../../entities";
import { ICartsRepository, getAllProps, getOneProps } from "../Interfaces";
declare class CartsImplementation implements ICartsRepository {
    private model;
    private crud;
    constructor(model: Model<Cart>);
    getOne: ({ key, value }: getOneProps) => Promise<Cart>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<Cart>>;
    getMany: (ids: string[], fields?: string) => Promise<Cart[]>;
    addOne: (data: Cart) => Promise<Cart>;
    update: (id: string, data: any) => Promise<Cart>;
    delete: (id: string) => Promise<any>;
}
export default CartsImplementation;
