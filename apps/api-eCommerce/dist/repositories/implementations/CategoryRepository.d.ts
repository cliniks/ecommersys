import { Category } from "../../entities/category.entitie";
import { ICategoryRepository } from "../Interfaces/ICategoryRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class CategoryRepository extends ConnectRepo implements ICategoryRepository {
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
    addOne: (data: Category) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
