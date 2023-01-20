import { StoreSolicitate } from "../../entities/storeSolicitate.entitie";
import { IStoreSolicitate } from "../Interfaces/IStoreSolicitate";
import { ConnectRepo } from "./ConnectRepo";
export declare class StoreSolicitateRepository extends ConnectRepo implements IStoreSolicitate {
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
    addOne: (data: StoreSolicitate) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
