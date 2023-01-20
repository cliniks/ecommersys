import { Cart } from "../../entities/cart.entitie";
import { ICartsRepository } from "../interfaces/ICartsRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class CartsRepository extends ConnectRepo implements ICartsRepository {
    private model;
    private crud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (pagFilter: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: Cart) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
