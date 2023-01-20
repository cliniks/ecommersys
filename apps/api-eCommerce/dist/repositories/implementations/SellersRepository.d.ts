import { Store } from "../../entities/store.entitie";
import { ISellersRepository } from "../Interfaces/ISellersRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class SellersRepository extends ConnectRepo implements ISellersRepository {
    private model;
    private crud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: Store) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
