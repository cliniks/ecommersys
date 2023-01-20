import { Sales } from "../../entities/sales.entitie";
import { ISalesRepository } from "../interfaces/ISalesRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class SalesRepository extends ConnectRepo implements ISalesRepository {
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
    addOne: (data: Sales) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
